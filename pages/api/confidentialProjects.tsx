import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from "next";
import ConfidentialProjList from "@/interface/ConfidentialProjList";
import ErrRes from "@/interface/ErrRes";

interface ResponseData {
  message: string;
  status: number;
  resData: ConfidentialProjList | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ErrRes>
) {
  if (req.method === "GET") {
    if (req.query.title === undefined || typeof req.query.title === "object") {
      return res.status(400).json({
        status: 400,
        message: "Invalid request",
      });
    }
    const title: string = req?.query.title;

    const project: ConfidentialProjList | null =
      await prisma.confidentialProjects.findUnique({
        where: {
          title: title,
        },
      });

    if (typeof project !== null) {
      return res.status(200).json({
        message: "Data fetching successful",
        status: 200,
        resData: project,
      });
    }
  }
}
