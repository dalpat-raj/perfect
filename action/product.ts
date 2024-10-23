"use server"

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteProduct = async (formData: FormData) => {
  const id = formData.get('id') as number | string;
    try {
      const isDeleted = await db.product.delete({
        where: {
          id: Number(id)
        }
      })
      if(!isDeleted){
        throw new Error('Please retry')
      }
      
      revalidatePath('/dashboard/products')
      return isDeleted
    } catch (error) {
      throw new Error("Please retry after some time")
    }
  };