import WorkspaceClient from "./WorkspaceClient";

export default async function Workspace() {
  // useQuery({
  //   queryKey: ["projectList"],
  //   queryFn: () => {
  //     return projectList;
  //   },
  // });

  // SSR & translation

  // const projectListData = await fetch(
  //   "http://localhost:3000/api/projectlist"
  // ).then((data) => {
  //   return data;
  // });
  // const projectList = await JSON.stringify(projectListData.json());
  // projectList: list?.data.resData,

  return (
    <>
      <span>hi</span>
      {/* <WorkspaceClient projectList={projectList} /> */}
    </>
  );
}
