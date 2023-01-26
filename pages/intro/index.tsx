import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styles from "./Intro.module.scss";

// components
import Intro from "@/components/Intro";

function Main() {
  const testRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = testRef.current;
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <>
      {/* intro */}
      <Intro />

      <div className={styles.Interest}>
        <span className={styles.interestGlowText}>My Interest</span>
        <div className={styles.interest}>
          <div>icon</div>
          <span>title</span>
          <span>sub title</span>
        </div>
        <div className={styles.interest}>
          <div>icon</div>
          <span>title</span>
          <span>sub title</span>
        </div>
      </div>
    </>
  );
}

export default Main;
