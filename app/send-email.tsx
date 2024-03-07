"use server"
import nodemailer from "nodemailer"
import { emailService } from "./supabase";

export async function sendGmailEmail(in_recipient : string, in_subject : string, in_message : string) {
    
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
            to: in_recipient,
            subject: in_subject,
            text: in_message,
        }
    
        const info = await transporter.sendMail(mailContent);
    }
    catch (error) {
        return false;
    }

    return true;
}