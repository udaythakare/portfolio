import { NextResponse } from "next/server";
import { sendMail } from "../../../helpers/mailer";

// Handle POST requests
export async function POST(req) {
    try {
        const { firstname, lastname, email, phone, message } = await req.json();

        // Validate required fields
        if (!firstname || !lastname || !email || !phone || !message) {
            return NextResponse.json(
                { success: false, error: "All fields are required." },
                { status: 400 }
            );
        }

        // Send email using the sendMail helper
        const result = await sendMail({ firstname, lastname, email, phone, message });

        // Handle success or failure of email sending
        if (result.success) {
            return NextResponse.json({ success: true, message: "Email sent successfully!" });
        } else {
            return NextResponse.json(
                { success: false, error: "Failed to send email." },
                { status: 500 }
            );
        }
    } catch (error) {
        // Log error for debugging
        console.error("Error in contact API:", error);

        // Respond with an internal server error
        return NextResponse.json(
            { success: false, error: "Internal Server Error." },
            { status: 500 }
        );
    }
}
