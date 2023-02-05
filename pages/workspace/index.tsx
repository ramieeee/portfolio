import axios from "axios";
import { useQuery } from "react-query";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
  // const testRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const el = testRef.current;
  //   gsap.fromTo(
  //     el,
  //     { opacity: 0 },
  //     {
  //       opacity: 1,
  //       duration: 3,
  //       scrollTrigger: {
  //         trigger: el,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className={styles.Main}>
      <span className={styles.logo}>SausageDog</span>
      <Intro />
      <Specialty />
      <Projects />
      <Contact />
      <div className={styles.iconContainer}>
        <a href="#Intro">
          <HomeIcon width="20px" height="20px" color="#ffffff" />
        </a>
        <a href="#Specialty">
          <SkillsIcon width="20px" height="20px" color="#ffffff" />
        </a>
        <a href="#Projects">
          <ProjectsIcon width="20px" height="20px" color="#ffffff" />
        </a>
        <a href="#Contact">
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
