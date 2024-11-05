"use server";
import { db } from "@/lib/db";
import { CouponCreate } from "@/lib/definations";
import { CouponCreateSchema } from "@/schema";
import { revalidatePath } from "next/cache";
import { currentRole } from "@/lib/data";
import { UserRole } from "@prisma/client";

export async function couponCreate(data: CouponCreate) {
    const role = await currentRole()
    try {
        if (role !== UserRole.ADMIN) {
            return {error: "User not verify!"}
          }
        const { code, discount, expirationDate } = CouponCreateSchema.parse(data);
        const discountValue = parseFloat(discount) / 100;
        await db.coupon.create({
            data: {
                code: code,
                discount: discountValue,
                expirationDate: new Date(expirationDate)
            },
        });
        revalidatePath("/dashboard/coupon")
        return {success: "Coupon Created ✅"}; 
    } catch (error) {
        return {error: "Database Error Failed To Create Coupon ❌"}
    }
}
