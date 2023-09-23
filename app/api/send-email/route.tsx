import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: ".. domain email not gmail, thats catch to use resend",
    to: "to reciever",
    subject: "...",
    react: (
      <WelcomeTemplate name="RecieverName as props which is created in component" />
    ),
  });
  return NextResponse.json({});
}
