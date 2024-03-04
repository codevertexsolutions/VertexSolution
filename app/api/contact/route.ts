import { NextResponse } from "next/server";

const mailer = require("nodemailer");

export async function POST(req: Request) {
  const authEmail = process.env.NEXT_APP_NODEMAILER_AUTH_EMAIL;
  const authPass = process.env.NEXT_APP_NODEMAILER_AUTH_PASSWORD;
  const to = "vertexsolutions.x@gmail.com";

  const request: any = await req.json();

  let transporter = mailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: "true",
    auth: {
      user: authEmail,
      pass: authPass,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: request.email, // sender address
    to: to, // list of receivers
    subject: `Message From ${request.company}`, // Subject line
    text: request.message, // plain text body
    html: `
    <p>Name: ${request.name}</p>
    <p>Company: ${request.company}</p>
    <p>Email: ${request.email}</p>
    <p>Message: ${request.message}</p>
    `, // html body
  });

  return NextResponse.json({
    message: "Form Submitted Successfully",
    success: true,
  });
}
