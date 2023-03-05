"use client";
// import { useEffect } from "react";
import styles from "./Landing.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  const [homeClassName, setHomeClassName] = useState<string | null>("home");
  // const [isMobile, setIsMobile] = useState<boolean>(false);

  // mobile detection
  // useEffect(() => {
  //   const device = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  //   if (device) {
  //     setIsMobile(true);
  //   }
  // }, []);

  return (
    <>
      <div
        className={homeClassName === "home" ? styles.Home : styles.HomeSlideOut}
        onClick={() => {
          setHomeClassName(null);
          setTimeout(() => {
            router.push("/workspace");
          }, 1000);
        }}
      >
        <div className={styles.vidContainer}>
          <video className={styles.video} loop autoPlay muted playsInline>
            <source src="/mimi_comp.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.textDiv}>
          <p className={styles.textTop}>RAMHEE</p>
          <p className={styles.textBottom}>YEON</p>
          <p>click</p>
        </div>
      </div>
    </>
  );
}
