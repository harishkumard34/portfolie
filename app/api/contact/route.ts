import { type NextRequest, NextResponse } from "next/server"

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

    console.log(`[v0] New contact message from ${email}: ${message}`)

    // For demonstration, we're logging the message
    // In production, integrate with:
    // - SendGrid API
    // - Resend API
    // - AWS SES
    // - Or any other email service

    return NextResponse.json({ success: true, message: "Message received!" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
