"use server"
import { db } from "@/lib/db";
import { revalidatePath } from 'next/cache';


import { z } from 'zod';
 
const FormSchema = z.object({
    id: z.number().optional(), 
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
    rating: z.coerce.number(), 
    image: z.any(),
    date: z.string().optional(),
  });
 
const CreateReview = FormSchema.omit({ id: true,rating: true, date: true });

export async function reviewAdd( id: number | undefined, rating: number , formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
    const { name, email, message, image } = CreateReview.parse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        image: formData.get('image'),
      });
     
      if (image instanceof File) {
          if(image.name){
              // upload image
          }
        }      

    try {    
        const [newReview, updatedProduct] = await db.$transaction([
          db.review.create({
            data: {
              name: name,
              email: email,
              message: message,
              productId: Number(id),
              rating: Number(rating),
            },
          }),
    
          db.product.update({
            where: { id: id },
            data: {
              rating: {
                set: await calculateAverageRating(id, rating),
              },
            },
          }),
        ]);

        revalidatePath(`/products/${id}`);
        return newReview;       
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Validation errors:", error.errors);
          } else {
            console.error("Unexpected error:", error);
          }
          throw new Error("Failed to create review");
        }
}




async function calculateAverageRating(productId: number | undefined, newRating: number): Promise<number> {
  const reviews = await db.review.findMany({
    where: { productId },
    select: { rating: true },
  });

  if (reviews.length === 0) {
    return newRating;  
  }

  const totalReviews = reviews.length + 1; 
  const sumOfRatings = reviews.reduce((sum, review) => sum + review.rating, 0) + newRating;  
  return sumOfRatings / totalReviews;
}



export async function reviewDelete(formData: FormData){
  const id = formData.get('id') as number | string;

  try {
    const isDeleted = await db.review.delete({
      where:{id: Number(id)}
    })

    if(!isDeleted){
      throw new Error("something went wrong")
    }
    revalidatePath('/dashboard/reviews')
  } catch (error) {
    throw new Error("something went wrong")
  }
}