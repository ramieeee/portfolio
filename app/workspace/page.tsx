import WorkspaceClient from "./WorkspaceClient";

export default async function Workspace() {
  const projectListData = await fetch("http://localhost:3000/api/projectlist");
  const projectList = await projectListData.json();

  const specialtyData =
    await require("@/public/SpecialtyData/specialtyData.json");

  return (
    <>
      <WorkspaceClient
        projectList={projectList.resData}
        specialtyData={specialtyData}
      />
    </>
  );
}
