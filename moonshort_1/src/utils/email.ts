import nodemailer from "nodemailer";

export const sendEmail = async ({
  email,
  otp,
}: {
  otp: string;
  email: string;
}) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST!,
      port: process.env.MAILTRAP_PORT!,
      auth: {
        user: process.env.MAILTRAP_AUTH_USER!,
        pass: process.env.MAILTRAP_AUTH_PASS!,
      },
    } as nodemailer.TransportOptions);

    const mailOptions = {
      form: "daspratham3@gmail.com",
      to: email,
      subject: "Verify your email",
      html: ` <p> OTP you requested has been generated</p>
      <p>Please use the below OTP to login to our portal.</p><p>Please use the below OTP to login to our portal.</p>
      <h2>${otp}</h2>
      <p>This code is valid for the next ten minutes. Please do not share your OTP with anyone.</p>
      <p>If you did not make this request, you can safely ignore this email.</p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);

    return mailResponse;
  } catch (error: unknown) {
    console.error(error);
  }
};
