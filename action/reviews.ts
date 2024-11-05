"use server"
import { currentRole } from "@/lib/data";
import { UserRole } from "@prisma/client";
import { db } from "@/lib/db";
import { revalidatePath } from 'next/cache';


import { z } from 'zod';
import { reviewSchema } from "@/schema";
 
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

export async function reviewAdd(values: z.infer<typeof reviewSchema>, id: number, rating: number, imagesShow: string[] ) {
    const validatedFields = reviewSchema.safeParse(values);
    if(!validatedFields.success){
      return { error: "Invalid fields!" };
    }
    
    const { name, email, message} = validatedFields.data;       

    try {    
        const [newReview, updatedProduct] = await db.$transaction([
          db.review.create({
            data: {
              name: name,
              email: email,
              message: message,
              productId: Number(id),
              rating: Number(rating),
              images: imagesShow,
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

        if(!newReview){
          return {error: "Opps... Please Retry ❌"}
        }

        revalidatePath(`/products/${id}`);
        return {success: "Review Added ✅"};       
    } catch (error) {
        if (error instanceof z.ZodError) {
          return {error: "Something went wrong ❌"}
          } else {
            return {error: "Something went wrong ❌"}
          }
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
  const id = formData.get("id");
  const productId = formData.get("productId");
  const rating = formData.get("rating");
 
  const idNumber = Number(id);
  const productIdNumber = Number(productId);
  const ratingNumber = Number(rating);

  if (isNaN(idNumber) || isNaN(productIdNumber) || isNaN(ratingNumber)) {
    return { error: "Invalid input values ❌" };
  }
  
  try {   
    const [isDeleted, updatedProduct] = await db.$transaction([
      db.review.delete({
        where:{id: Number(id)}
      }),

      db.product.update({
        where: { id: Number(productId) },
        data: {
          rating: {
            set: await DeleteAverageRating(productIdNumber, ratingNumber),
          },
        },
      }),
    ]);


    if(!isDeleted){
      throw new Error("something went wrong")
    }
    revalidatePath("/profile/reviews")
    return {success: "Review Deleted ✅"}
  } catch (error) {
    return { error: "Something went wrong ❌" }
  }
}

export async function adminReviewDelete(formData: FormData){
  const id = formData.get("id");
  const productId = formData.get("productId");
  const rating = formData.get("rating");
 
  const idNumber = Number(id);
  const productIdNumber = Number(productId);
  const ratingNumber = Number(rating);

  if (isNaN(idNumber) || isNaN(productIdNumber) || isNaN(ratingNumber)) {
    return { error: "Invalid input values ❌" };
  }
  const role = await currentRole()
  
  try {  
    if (role !== UserRole.ADMIN) {
      return {error: "User not verify!"}
    } 
    const [isDeleted, updatedProduct] = await db.$transaction([
      db.review.delete({
        where:{id: Number(id)}
      }),

      db.product.update({
        where: { id: Number(productId) },
        data: {
          rating: {
            set: await DeleteAverageRating(productIdNumber, ratingNumber),
          },
        },
      }),
    ]);


    if(!isDeleted){
      throw new Error("something went wrong")
    }
    revalidatePath('/dashboard/reviews')
    return {success: "Review Deleted ✅"}
  } catch (error) {
    return { error: "Something went wrong ❌" }
  }
}

async function DeleteAverageRating(productIdNumber: number, ratingNumber: number): Promise<number> {
  const reviews = await db.review.findMany({
    where: { productId: productIdNumber },
    select: { rating: true },
  });

  if (reviews.length === 0) {
    return 0;  
  }

  const sumOfRatings = reviews.reduce((sum, review) => sum + review.rating, 0) - ratingNumber;

  const totalReviews = reviews.length - 1;
  return totalReviews > 0 ? sumOfRatings / totalReviews : 0; 
}