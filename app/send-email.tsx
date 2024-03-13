"use server"
import nodemailer from "nodemailer"
import { emailService, IVerificationEmailData, } from "./supabase";

export const SendConfirmationEmail = async (in_emailData : IVerificationEmailData) => {
    try {
        const transporter = nodemailer.createTransport({
            service: emailService,
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
            },
        });

        const mailContent = {
            from: process.env.NEXT_PUBLIC_EMAIL,
            to: in_emailData.recipient,
            subject: in_emailData.subject,
            text: in_emailData.message,
        };

        const info = await transporter.sendMail(mailContent);
    }
    catch (error) {
        console.error(error);
        return false;
    }

    return true;
}