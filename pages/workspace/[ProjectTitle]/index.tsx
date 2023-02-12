import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import ProjectList from "@/interface/ProjectList";

export default function Project() {
  const router = useRouter();

  return (
    <div>
      <span>hello</span>
    </div>
  );
}

export async function getStaticPaths() {
  const list = await axios.get("http://localhost:3000/api/projectlist");
  // const titles = list?.data.resData;
  const titles = list?.data.resData.filter((project: ProjectList) => {
    return project.url === "Confidential";
  });

  const allPaths = titles?.map((project: ProjectList) => {
    return {
      params: {
        ProjectTitle: project.title,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  // const id = context.id;

  // const list = await axios
  //   .get("http://localhost:3000/api/projectlist")
  //   .then((res: AxiosResponse) => {
  //     return res.data.resData;
  //   });

  // const data = allEvents.filter((ev) => {
  //   return ev.city === id;
  // });

  return {
    props: {},
  };
}
