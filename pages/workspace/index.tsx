import axios from "axios";
import { useQuery } from "react-query";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styles from "./Workspace.module.scss";

// components
import Intro from "@/components/Intro";
import Speciality from "@/components/Speciality";
import Projects from "@/components/Projects";

// interface
import ProjectList from "@/interface/ProjectList";

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
    <>
      <span className={styles.logo}>SausageDog</span>
      <Intro />
      <Speciality />
      <Projects />
    </>
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
