import ProjectClient from "./ProjectClient";
import ProjectList from "@/interface/ProjectList";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projectListData = await fetch(`http://localhost:3000/api/projectlist`);
  const projectList = await projectListData.json();

  const list = projectList.resData.filter((project: ProjectList) => {
    return project.url === "Confidential";
  });

  return list.map((project: ProjectList) => ({
    title: project.title,
  }));
}

export default async function Project({
  params,
}: {
  params: { title: string };
}) {
  const title = params.title;
  const data = await fetch(
    `http://localhost:3000/api/confidentialProjects?title=${title}`
  );
  const dataDetails = await data.json();
  if (dataDetails.resData === null) {
    notFound();
  }

  return (
    <>
      <ProjectClient data={dataDetails.resData} />
    </>
  );
}
