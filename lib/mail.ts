import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)
const domain = process.env.OUR_DOMAIN_NAME;

export const sendPasswordResetEmail = async (
    email: string,
    token: string,
)=> {
    const resendLink = `${domain}/auth/new-password?token=${token}`

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset Your Password",
        html: `<p>Click <a href="${resendLink}">here</a> to reset password.</p>`
    })
}