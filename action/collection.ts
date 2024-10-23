'use server'

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";



export async function createCollction(image: string,formData: FormData) {
    const title = formData.get('title') as string;
    
    try {
     await db.collection.create({
            data:{
                title,
                image,
            }
        })
        
        revalidatePath(`/dashboard/collection/createCollecion`);
    } catch (error) {
        throw new Error("Failed to create collection");
    }
    
}


export async function editCollction(id: number, image: string,formData: FormData) {
    const title = formData.get('title') as string;
    
    try {
     await db.collection.update({
        where: {id: id},
        data: {
            title,
            image,
        }
     })
        revalidatePath(`/dashboard/collection`);
    } catch (error) {
        throw new Error("Failed to create collection");
    }
    
}


export async function deleteCollection(id: number){
    console.log(id);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const collections = await db.collection.delete({where: { id: id}})
      
      if(!collections) throw new Error("Fiailed to fetch Collction!")
        revalidatePath('/dashboard/collection')
      return collections;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw new Error("Failed to fetch reviews");
    }
  }