import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url); 
    const collection = url.searchParams.get('collection') || undefined; 
    const minPrice = url.searchParams.get('minPrice'); 
    const maxPrice = url.searchParams.get('maxPrice'); 
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');

    const where: any = {};


    if (collection) {
      where.collection = collection; 
    }
    if (minPrice !== null && !isNaN(Number(minPrice))) {
      where.sellingPrice = { gte: parseFloat(minPrice) }; 
    }
    if (maxPrice !== null && !isNaN(Number(maxPrice))) {
      where.sellingPrice = { ...where.sellingPrice, lte: parseFloat(maxPrice) }; 
    }

    const products = await db.product.findMany({
      where: Object.keys(where).length ? where : undefined,
      orderBy: {
        createdAt: 'desc',
      },
      include: {review: true},
      skip: (page - 1) * limit,
      take: limit,
    });
    
    const totalProducts = await db.product.count({ where });

    return NextResponse.json({ products, totalProducts });
  } catch (error) {
    console.error('Error fetching products:', error); 
    return NextResponse.json({ message: 'Error fetching products', error: error }, { status: 500 }); 
  }
}
