"use server";
import { db } from "@/lib/db";
import { revalidatePath } from 'next/cache';



export async function AddBanner(images: string[] | any ,formData: FormData) {
    const url = formData.get('url') as string;

    try {
        
        if(!url || !images){
            throw new Error('All fields are require!')
        }

        const banner = await db.banner.create({
            data: {
                url: url,
                images: images
            },
        });

        revalidatePath('/dashboard/banner');
        return banner; 
        
    } catch (error) {
        throw new Error("Failed to create coupon");
    }
}


export async function EditBanner(id:number, images: string[] | any ,formData: FormData) {
    const url = formData.get('url') as string;

    try {
        
        if(!url || !images){
            throw new Error('All fields are required!')
        }

        const banner = await db.banner.update({
            where:{id: Number(id)},
            data: {
                url: url,
                images: images
            },
        });

        revalidatePath('/dashboard/banner');
        return banner; 
        
    } catch (error) {
        throw new Error("Failed to edit banner");
    }
}


export async function DeleteBanner(formData: FormData) {
    const id = formData.get('id') as number | string;
    try {
        
        if(!id){
            throw new Error('pease retry')
        }

        const banner = await db.banner.delete({
            where:{id: Number(id)},
        });

        revalidatePath('/dashboard/banner');
        return banner; 
        
    } catch (error) {
        throw new Error("Failed to delete banner");
    }
}