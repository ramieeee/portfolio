import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styles from "./Intro.module.scss";

function Intro() {
  // const testRef = useRef(null);

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

  // let observer: IntersectionObserver;
  // const testRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   observer = new IntersectionObserver((el: IntersectionObserverEntry[]) => {
  //     el.forEach((div: IntersectionObserverEntry) => {
  //       const a = div.target as HTMLElement;
  //       a.className = "te";
  //     });
  //   });

  //   if (testRef.current) {
  //     observer.observe(testRef?.current);
  //   }
  // }, []);

  return (
    <div className={styles.Intro}>
      <div className={styles.logo}>SausageDog</div>
      <div className={styles.textContainer}>
        {/* <div className={styles.glowText}>Welcome!</div> */}
        <span className={styles.introName}>Ramhee Yeon</span>
        <div className={styles.introTextContainer}>
          <span className={styles.introTextLeft}>
            Welcome! my name is Ramhee Yeon. I am a developer and a software
            engineer. I am also a postgraduate student majoring in AI
          </span>
          <span className={styles.introTextRight}>
            Web developer, software engineer, postgraduate
          </span>
        </div>
        <div className={styles.introTextBottomContainer}>
          <span className={styles.introTextBottom}>
            If you are interested in my work in details, check out{" "}
            <a
              href="https://github.com/ramieeee"
              target="_blank"
              className={styles.introTextBottomGlow}
            >
              Github
            </a>{" "}
            and{" "}
            <a
              href="https://www.notion.so/ramieeee/Hey-26c0b8e94dce4543b0bb50abf571b0cf"
              target="_blank"
              className={styles.introTextBottomGlow}
            >
              Notion
            </a>
          </span>
        </div>
      </div>
      <div style={{ margin: "1000px 0 100px 100px" }}>
        {/* <span ref={testRef}>text</span> */}
      </div>
    </div>
  );
}

export default Intro;
