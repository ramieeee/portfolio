import { useRef } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import styles from "./Workspace.module.scss";

// components
import Intro from "@/components/Intro";
import Specialty from "@/components/Specialty";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// interface
import ProjectList from "@/interface/ProjectList";

// icons
import HomeIcon from "@/components/icons/HomeIcon";
import SkillsIcon from "@/components/icons/SkillsIcon";
import ProjectsIcon from "@/components/icons/ProjectsIcon";
import ContactIcon from "@/components/icons/ContactIcon";

interface ProjectListData {
  projectList: ProjectList[];
}

function Main({ projectList }: ProjectListData) {
  useQuery({
    queryKey: ["projectList"],
    queryFn: () => {
      return projectList;
    },
  });

  const introRef = useRef<HTMLDivElement>(null);
  const specialtyRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.Main}>
      <span className={styles.logo}>SausageDog</span>
      <Intro ref={introRef} props={null} />
      <Specialty ref={specialtyRef} props={null} />
      <Projects ref={projectsRef} props={null} />
      <Contact ref={contactRef} props={null} />
      <div className={styles.iconContainer}>
        <a
          onClick={() => {
            introRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <HomeIcon width="20px" height="20px" color="#ffffff" />
        </a>
        <a
          onClick={() => {
            specialtyRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <SkillsIcon width="20px" height="20px" color="#ffffff" />
        </a>
        <a
          onClick={() => {
            projectsRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ProjectsIcon width="20px" height="20px" color="#ffffff" />
        </a>
        <a
          onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ContactIcon width="20px" height="20px" color="#ffffff" />
        </a>
      </div>
    </div>
  );
}

export default Main;

export async function getServerSideProps() {
  const list = await axios.get("http://localhost:3000/api/projectlist");
  return {
    props: {
      projectList: list?.data.resData,
    },
  };
}
