import axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";
import ProjectList from "@/interface/ProjectList";
import ConfidentialProjList from "@/interface/ConfidentialProjList";

import styles from "./Project.module.scss";

interface Props {
  data: ConfidentialProjList;
}

export default function Project({ data }: Props) {
  return (
    <div className={styles.Project}>
      <span className={styles.logo}>SausageDog</span>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{data.title}</span>
      </div>
      <img src={data.imageUrl} alt={`Image of ${data.title}`} />
      <div className={styles.descContainer}>
        <span className={styles.desc}>{data.descriptionEng}</span>
      </div>

      <div className={styles.skillsTextContainer}>
        <span className={styles.skillsText}>Skills used</span>
      </div>

      {data.skills.map((data) => {
        return (
          <div className={styles.skillsContainer} key={data}>
            <span className={styles.skills}>{data}</span>
          </div>
        );
      })}
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

export const getStaticProps: GetStaticProps = async (context) => {
  const title = context.params?.ProjectTitle;

  const list = await axios
    .get(`http://localhost:3000/api/confidentialProjects?title=${title}`)
    .then((res: AxiosResponse) => {
      return res.data.resData;
    });

  return {
    props: {
      data: list,
    },
  };
};
