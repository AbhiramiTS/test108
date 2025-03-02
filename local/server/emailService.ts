
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

export const sendContactEmail = async (contact: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'abhiramimirror@gmail.com',
    subject: `New Contact Form Submission from ${contact.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Message:</strong> ${contact.message}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};
