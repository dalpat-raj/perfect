'use server'
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { currentRole } from "@/lib/data";
import { UserRole } from "@prisma/client";



export async function createCollction(image: string,formData: FormData) {
    const title = formData.get('title') as string;
    const role = await currentRole()
    try {
        if (role !== UserRole.ADMIN) {
            return {error: "User not verify!"}
        }
        await db.collection.create({
            data:{
                title,
                image,
            }
        })
        
        revalidatePath(`/dashboard/collection/createCollecion`);
        return {success: "Collection Created ✅"}
    } catch (error) {
        console.log("error", error);
        return {error: "Database error failed to create Collection ❌"}
        
    }
    
}


export async function editCollction(id: number, image: string, formData: FormData) {
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
        return {success: "Collection Updated ✅"}
    } catch (error) {
        console.log("error", error);
        return {error: "failed to create Collection ❌"}
    }
    
}


export async function deleteCollection(formData: FormData){
    const id = formData.get("id")
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const collections = await db.collection.delete({where: {id: Number(id)}})
      
      if(!collections) throw new Error("Fiailed to fetch Collction!")
        revalidatePath('/dashboard/collection')
      return {success: "Collection Deleted ✅"};
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return {error: "Opps... ❌"}
    }
  }