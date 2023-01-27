import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styles from "./Workspace.module.scss";

// components
import Intro from "@/components/Intro";
import Speciality from "@/components/Speciality";
import Projects from "@/components/Projects";

function Main() {
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
