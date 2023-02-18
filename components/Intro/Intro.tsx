import { useEffect, useRef, forwardRef } from "react";
import styles from "./Intro.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props {
  props: null;
}

const Intro = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const nameRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLElement>(null);
  const textRightRef = useRef<HTMLElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(nameRef.current, {
      duration: 3,
      scrollTrigger: {
        trigger: nameRef.current,
      },
      keyframes: {},
    });
    gsap.fromTo(
      textLeftRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: textLeftRef.current,
        },
      }
    );
    gsap.fromTo(
      textRightRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: textRightRef.current,
        },
      }
    );
    gsap.fromTo(
      underlineRef.current,
      { width: "0px", transform: "translate(10vw)" },
      {
        width: "40vw",
        opacity: "1",
        transform: "translate(0px)",
        delay: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: textRightRef.current,
        },
      }
    );
  }, []);

  return (
    <div className={styles.Intro} id="Intro" ref={ref}>
      <div className={styles.textContainer}>
        <div className={styles.introName} ref={nameRef}>
          <span>
            Ramh<span className={styles.blink}>e</span>e Yeon
          </span>
        </div>
        <div className={styles.introTextContainer}>
          <span className={styles.introTextLeft} ref={textLeftRef}>
            Welcome! my name is Ramhee Yeon. I am a developer and a software
            engineer. I am also a postgraduate student majoring in AI
          </span>
          <span className={styles.introTextRight} ref={textRightRef}>
            Web developer, Postgraduate student
            {/* {t("INTRO_KEYWORDS")} */}
          </span>
        </div>
        <div className={styles.line} ref={underlineRef} />
      </div>
    </div>
  );
});

export default Intro;
