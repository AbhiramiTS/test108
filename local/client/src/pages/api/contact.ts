import { NextApiRequest, NextApiResponse } from "next";
import { insertContactSchema } from "@shared/schema";
// import prisma from "@/lib/prisma"; // If using Prisma, otherwise replace with your database logic

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const validatedData = insertContactSchema.parse(req.body);

    // Example: Save to a database (modify as needed)
    // await prisma.contact.create({
    //   data: validatedData,
    // });

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid data", error });
  }
}
