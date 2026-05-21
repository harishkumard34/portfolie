import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { email, message, toEmail } = await request.json()

    if (!email || !message || !toEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail, // This will be your harishkumardhanasekaran3@gmail.com
      replyTo: email, // If you reply to the email, it goes to the sender
      subject: `New Portfolio Message from ${email}`,
      text: `You have received a new message from your portfolio website:\n\nSender Email: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; max-width: 600px;">
          <h2 style="color: #0ea5e9;">New Portfolio Contact</h2>
          <p><strong>From:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; color: #334155; line-height: 1.5;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send email. Please check server configuration." }, { status: 500 })
  }
}
