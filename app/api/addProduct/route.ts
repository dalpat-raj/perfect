import { currentRole } from "@/lib/data";
import { db } from "@/lib/db"
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server"

export async function POST(request: Request){
    const body = await request.json()
    const {
        title,
        description,
        modelNumber,
        stock,
        originalPrice,
        sellingPrice,
        collection,
        model,
        color,
        feature,
        images, 
    } = body;
    const role = await currentRole();
    
    try{
        if(role === UserRole.ADMIN){
            const product = await db.product.create({
                data: {
                    title,
                    description,
                    modelNumber,
                    stock: Number(stock),
                    originalPrice: Number(originalPrice),
                    sellingPrice: Number(sellingPrice),
                    collection,
                    model,
                    color,
                    feature,
                    images, 
                },
            })
            return NextResponse.json(product)
        }
    }
    catch(error){
        console.log('Error creating the product', error)
        return NextResponse.error()
    }
}
