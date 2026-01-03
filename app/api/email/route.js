import ContactMail from "@/emails/ContactMail";
import { Resend } from "resend";

let cachedClient = null;

const getResendClient = () => {
  if (!cachedClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY not found.");
    }
    cachedClient = new Resend(apiKey);
  }

  return cachedClient;
};

export async function POST(request) {
  const req = await request.json();
  try {
    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from: process.env.DEVFOLIO_MAIL,
      to: process.env.SEND_MAIL_TO,
      subject: `Contact-Form Message From: ${req.name}`,
      react: ContactMail({
        name: req.name,
        email: req.email,
        message: req.message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ data }, { status: 200 });
  } catch (emailError) {
    return Response.json({ error: emailError }, { status: 500 });
  }
}
