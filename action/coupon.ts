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
        const discountValue = parseFloat(discount);
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


export async function deleteCoupon(id:number) {
    const role = await currentRole()
    try {
        if (role !== UserRole.ADMIN) {
            return {error: "User not verify!"}
        }
        
        const isDeleted = await db.coupon.delete({
            where: {
                id: id
            }
        })
        
        if(!isDeleted){
            return {error: "Failed To Delete Coupon ❌"}
        }
        
        revalidatePath("/dashboard/coupon")
        return {success: "Coupon Deleted ✅"}; 
    } catch (error) {
        return {error: "Database Error Failed To Delete Coupon ❌"}
    }
}