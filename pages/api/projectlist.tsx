// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  id: number;
  category: string;
  title: string;
  descriptionEng: string;
  descriptionKor: string;
  url: string;
}

interface ResponseData {
  message: string;
  status: number;
  resData: Data[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    const projectList = await prisma.projectList.findMany();

    return res.status(200).json({
      message: "Data fetching successful",
      status: 200,
      resData: projectList,
    });
  }

  // res.status(200).json({ name: "John Doe" });
}
