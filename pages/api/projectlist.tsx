import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import type { NextApiRequest, NextApiResponse } from "next";
import ProjectList from "@/interface/ProjectList";
import ErrRes from "@/interface/ErrRes";

interface ResponseData {
  message: string;
  status: number;
  resData: ProjectList[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ErrRes>
) {
  if (req.method === "GET") {
    const projectList = await prisma.projectList.findMany();

    return res.status(200).json({
      message: "Data fetching successful",
      status: 200,
      resData: projectList,
    });
  } else {
    return res.status(400).json({
      status: 400,
      message: "Invalid request",
    });
  }
}
