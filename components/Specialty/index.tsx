import { useEffect, useRef, forwardRef } from "react";
import styles from "./Specialty.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// components
import AiIcon from "@/components/icons/AiIcon";
import CodingIcon from "@/components/icons/CodingIcon";
import Line from "@/components/Line";
import Modal from "@/components/Modal";

interface Props {
  props: null;
}

const Specialty = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const textLeftRef = useRef<HTMLElement>(null);
  const textRightRef = useRef<HTMLElement>(null);
  const underlineLeftRef = useRef<HTMLDivElement>(null);
  const underlineRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textLeftRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
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
      underlineLeftRef.current,
      { width: "0px" },
      {
        width: "40px",
        delay: 0.8,
        duration: 0.4,
        scrollTrigger: {
          trigger: underlineLeftRef.current,
        },
      }
    );
    gsap.fromTo(
      underlineRightRef.current,
      { width: "0px" },
      {
        width: "40px",
        delay: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: underlineRightRef.current,
        },
      }
    );
  }, []);

  return (
    <div className={styles.Specialty} id="Specialty" ref={ref}>
      <div className={styles.specialtyGlowText}>
        <span>My Specialty</span>
      </div>
      <div className={styles.container}>
        <div className={styles.specialtyBox}>
          <AiIcon width={"50px"} height={"50px"} color={"#ffffff"} />
          <Line
            width="40px"
            margin="20px 0"
            borderBottom="1px white solid"
            ref={underlineLeftRef}
          />
          <span className={styles.specialtyTitle}>Artificial Intelligence</span>
          <span className={styles.specialtyText} ref={textLeftRef}>
            As a postgraduate student,
          </span>
        </div>
        <div className={styles.specialtyBox}>
          <CodingIcon width={"50px"} height={"50px"} color={"#ffffff"} />
          <Line
            width="40px"
            margin="20px 0"
            borderBottom="1px white solid"
            ref={underlineRightRef}
          />
          <span className={styles.specialtyTitle}>Web Development</span>
          <span className={styles.specialtyText} ref={textRightRef}>
            As a front-end developer,
          </span>
        </div>
      </div>
      <Modal />
    </div>
  );
});

export default Specialty;
