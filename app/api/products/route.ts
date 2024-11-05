import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const collection = url.searchParams.get('collection') || undefined;
    const minPrice = parseFloat(url.searchParams.get('minPrice') || 'NaN');
    const maxPrice = parseFloat(url.searchParams.get('maxPrice') || 'NaN');
    const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '10')));

    const where: { collection?: string; sellingPrice?: { gte?: number; lte?: number; } } = {};

    if (collection) {
      where.collection = collection;
    }
    if (!isNaN(minPrice)) {
      where.sellingPrice = { ...where.sellingPrice, gte: minPrice };
    }
    if (!isNaN(maxPrice)) {
      where.sellingPrice = { ...where.sellingPrice, lte: maxPrice };
    }

    const products = await db.product.findMany({
      where: Object.keys(where).length ? where : undefined,
      orderBy: { createdAt: 'desc' },
      include: { review: true },
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalProducts = await db.product.count({ where });

    return NextResponse.json({ products: products || [], totalProducts });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching products', error: error }, { status: 500 });
  }
}
