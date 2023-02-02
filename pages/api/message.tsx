import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
  message: string;
  status: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(req.body);
  if (req.method === "POST") {
    const sendPost = await prisma.messageList.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        message: req.body.body,
      },
    });

    return res.status(200).json({
      message: "Data successfully inserted",
      status: 200,
    });
  }
}
