"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

// components
import Intro from "@/components/Intro/Intro";
import Specialty from "@/components/Specialty/Specialty";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
// import LangToggle from "@/components/LangToggle/LangToggle";
import Footer from "@/components/Footer/Footer";

// styles
import styles from "./Workspace.module.scss";

// interface
import ProjectList from "@/interface/ProjectList";

// icons
import HomeIcon from "@/components/icons/HomeIcon/HomeIcon";
import SkillsIcon from "@/components/icons/SkillsIcon/SkillsIcon";
import ProjectsIcon from "@/components/icons/ProjectsIcon/ProjectsIcon";
import ContactIcon from "@/components/icons/ContactIcon/ContactIcon";

interface ProjectListData extends SpecialtyData {
  projectList: ProjectList[];
}

interface SpecialtyData {
  specialtyData: {
    ai: {
      title: string;
      text: string;
    };
    web: {
      title: string;
      text: string;
    };
  };
}

export default function WorkspaceClient({
  projectList,
  specialtyData,
}: ProjectListData) {
  const router = useRouter();

  const introRef = useRef<HTMLDivElement>(null);
  const specialtyRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.Workspace}>
      <Intro ref={introRef} props={null} />
      <Specialty ref={specialtyRef} specialtyData={specialtyData} />
      <Projects ref={projectsRef} projectList={projectList} />
      <Contact ref={contactRef} props={null} />
      <Footer />

      {/* icon navigation */}
      <div className={styles.iconContainer}>
        {/* <Link href="" locale={changeTo} style={{ textDecoration: "none" }}>
          <LangToggle />
        </Link> */}
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
