"use server"
import { currentRole } from "@/lib/data";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const deleteProduct = async (id: number) => {
  const role = await currentRole();

      try {
        if (role !== UserRole.ADMIN) {
          return {error: "User not verify!"}
        }
  
        const isDeleted = await db.product.delete({
          where: {
            id: id
          }
    
        })
        if(!isDeleted){
          return {error: "Please retry!"}
        }
        revalidatePath("/dashboard/products")
        return {success: "Product Deleted ✅"}
      } catch (error) {
        return ({error: "Database Error Product Delete Failed ❌"})
      }
    
  };