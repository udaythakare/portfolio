import nodemailer from "nodemailer";

/**
 * Sends an email with the provided contact details.
 * 
 * @param {Object} data - The mail data.
 * @param {string} data.firstname - The sender's first name.
 * @param {string} data.lastname - The sender's last name.
 * @param {string} data.email - The sender's email address.
 * @param {string} data.phone - The sender's phone number.
 * @param {string} data.message - The message content.
 * 
 * @returns {Promise<Object>} - Result of the email send attempt.
 */
export async function sendMail({ firstname, lastname, email, phone, message }) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST, // Mailtrap host
            port: process.env.MAIL_PORT, // Mailtrap port
            auth: {
                user: process.env.MAIL_USER, // Mailtrap username
                pass: process.env.MAIL_PASSWORD,
             }, //
        });

        await transporter.sendMail({
            from: `"${firstname} ${lastname}" <${email}>`, // Sender's email
            to: "techads.work@gmail.com", // Your email address
            subject: "New Contact Form Submission",
            html: `
                <h3>Contact Details</h3>
                <p><b>Firstname:</b> ${firstname}</p>
                <p><b>Lastname:</b> ${lastname}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <h3>Message</h3>
                <p>${message}</p>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: error.message };
    }
}
