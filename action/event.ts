"use server";
import { db } from "@/lib/db";
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const FormSchema = z.object({
    id: z.number().optional(), 
    title: z.string(),
    description: z.string(),
    discount: z.string(),
    date: z.string().optional(),
});

const CreateReview = FormSchema.omit({ id: true, date: true });

export async function eventAdd(products: number[], endDate: Date, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { title, description, discount } = CreateReview.parse({
        title: formData.get('title'),
        description: formData.get('description'),
        discount: formData.get('discount'),
    });

    try {
        // Convert discount to a float for calculations
        const discountValue = parseFloat(discount) / 100; // Assuming discount is a percentage

        // Create the new event
        const newEvent = await db.event.create({
            data: {
                title,
                description,
                discount: parseFloat(discount),
                endDate: endDate
            },
        });

        // Get the original prices of the products
        const productsToUpdate = await db.product.findMany({
            where: {
                id: { in: products },
            },
            select: {
                id: true,
                originalPrice: true,
            },
        });

        // Update the selling price of each product based on the discount
        const updatePromises = productsToUpdate.map(product => {
            const newSellingPrice = product.originalPrice * (1 - discountValue);
            return db.product.update({
                where: { id: product.id },
                data: { sellingPrice: newSellingPrice },
            });
        });

        // Execute all updates
        await Promise.all(updatePromises);

        // Create event-product associations
        const eventProducts = products.map(productId => ({
            eventId: newEvent.id,
            productId,
        }));

        await db.eventProduct.createMany({
            data: eventProducts,
        });

        revalidatePath('/dashboard/events/createEvent');
        return newEvent; 
        
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Validation errors:", error.errors);
        } else {
            console.error("Unexpected error:", error);
        }
        throw new Error("Failed to create review");
    }
}
