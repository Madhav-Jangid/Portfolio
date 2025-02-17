/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        const message = `
        Hey Madhav,

        I'm ${body.name}, and I'm interested in connecting with you. Here are my details:

        - Interest: ${body.interest}
        - Message: ${body.message}

        Looking forward to hearing from you!

        Best regards,
        ${body.name}
        `;



        console.log(message);


        await transporter.sendMail({
            from: `"${body.name}" <${body.email}>`,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Form Submission',
            text: message,
            bcc: body.email,

        });

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Failed to send email:', error);
        return NextResponse.json(
            { message: 'Failed to send email', error: error.message },
            { status: 500 }
        );
    }
}
