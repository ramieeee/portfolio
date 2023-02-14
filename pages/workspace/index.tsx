import { useRef } from "react";
import axios from "axios";
import { useQuery } from "react-query";

// i18next
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

// components
import Intro from "@/components/Intro";
import Specialty from "@/components/Specialty";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// styles
import styles from "./Workspace.module.scss";

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
  const router = useRouter();
  const changeTo = router.locale === "en" ? "kr" : "en";

  const introRef = useRef<HTMLDivElement>(null);
  const specialtyRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useQuery({
    queryKey: ["projectList"],
    queryFn: () => {
      return projectList;
    },
  });

  return (
    <div className={styles.Main}>
      <span className={styles.logo}>SausageDog</span>
      <Intro ref={introRef} props={null} />
      <Specialty ref={specialtyRef} props={null} />
      <Projects ref={projectsRef} props={null} />
      <Contact ref={contactRef} props={null} />
      <Footer />

      {/* icon navigation */}
      <div className={styles.iconContainer}>
        <Link href="" locale={changeTo}>
          <button>change</button>
        </Link>
        <div
          onClick={() => {
            introRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <HomeIcon width="20px" height="20px" color="#ffffff" />
        </div>
        <div
          onClick={() => {
            specialtyRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <SkillsIcon width="20px" height="20px" color="#ffffff" />
        </div>
        <div
          onClick={() => {
            projectsRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ProjectsIcon width="20px" height="20px" color="#ffffff" />
        </div>
        <div
          onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ContactIcon width="20px" height="20px" color="#ffffff" />
        </div>
      </div>
    </div>
  );
}

export default Main;

// SSR & translation
export async function getServerSideProps({ locale }: { locale: string }) {
  const list = await axios.get("http://localhost:3000/api/projectlist");
  return {
    props: {
      projectList: list?.data.resData,

      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}
