"use server";
import { db } from "@/lib/db";
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const FormSchema = z.object({
    id: z.number().optional(), 
    code: z.string(),
    discount: z.string(),
    date: z.string().optional(),
});

const CreateCoupon = FormSchema.omit({ id: true, date: true });

export async function couponAdd(expirationDate: Date, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { code, discount } = CreateCoupon.parse({
        code: formData.get('code'),
        discount: formData.get('discount'),
    });

    try {

        const newCoupon = await db.coupon.create({
            data: {
                code: code,
                discount: parseFloat(discount),
                expirationDate: expirationDate
            },
        });

        revalidatePath('/dashboard/coupon/createCoupon');
        return newCoupon; 
        
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Validation errors:", error.errors);
        } else {
            console.error("Unexpected error:", error);
        }
        throw new Error("Failed to create coupon");
    }
}
