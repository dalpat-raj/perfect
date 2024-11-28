import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const url = new URL(request.url);
      
    const searchText = url.searchParams.get('query') || undefined;
    const collection = url.searchParams.get('collection') || undefined;
    const minPrice = parseFloat(url.searchParams.get('minPrice') || 'NaN');
    const maxPrice = parseFloat(url.searchParams.get('maxPrice') || 'NaN');
    const stock = url.searchParams.get('stock') || undefined;
    const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '10')));
    
    const where: { 
      title?: { contains: string, mode: 'insensitive' }; 
      collection?: string; 
      sellingPrice?: { gte?: number; lte?: number; }; 
      stock?: { gt?: number; gte?: number; equals?: number };
    } = {};

    if (searchText) {
      where.title = { contains: searchText, mode: 'insensitive' };
    }
    if (collection) {
      where.collection = collection;
    }
    if (!isNaN(minPrice)) {
      where.sellingPrice = { ...where.sellingPrice, gte: minPrice };
    }
    if (!isNaN(maxPrice)) {
      where.sellingPrice = { ...where.sellingPrice, lte: maxPrice };
    }  
    
    if (stock === "true") {
      where.stock = { gt: 0 }; 
    } else if (stock === 'false') {
      where.stock = { equals: 0 };
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
