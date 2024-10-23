import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PUT(request: Request){
    const body = await request.json()
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop()
    
    try{
        const product = await db.product.update({where:{id: Number(id)}, data: {
            title: body.title,
            description: body.description,
            modelNumber: body.modelNumber,
            stock: Number(body.stock),
            originalPrice: Number(body.originalPrice),
            sellingPrice: Number(body.sellingPrice),
            collection: body.collection,
            model: body.model,
            color: body.color,
            feature: body.feature,
            images: body.images, 
        }})
        return NextResponse.json(product)
    }
    catch(error){
        console.log('Error creating the product', error)
        return NextResponse.error()
    }
}
