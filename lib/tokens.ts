import {v4 as uuidv4} from "uuid";
import { getPasswordResetTokenByEmail } from "./data";
import { db } from "./db";

// password reste
export const generatePasswordResetToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getPasswordResetTokenByEmail(email)

    if(existingToken){
        await db.passwordResetToken.delete({
            where: {id: existingToken.id}
        })
    }

    const passwordResetToken = await db.passwordResetToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return passwordResetToken;
}