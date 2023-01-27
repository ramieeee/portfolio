import styles from "./Landing.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function Landing() {
  const router = useRouter();

  const [homeClassName, setHomeClassName] = useState<string | null>("home");

  useQuery({
    queryKey: ["firstVisitCheck"],
    queryFn: () => {
      return "first";
    },
  });

  return (
    <>
      {/* <Link href="/workspace"> */}
      <div
        className={homeClassName === "home" ? styles.Home : styles.HomeSlideOut}
        onClick={() => {
          setHomeClassName(null);
          setTimeout(() => {
            router.push("/workspace");
          }, 300);
        }}
      >
        <div className={styles.vidContainer}>
          <video className={styles.video} loop autoPlay muted>
            <source src="/sampleVid.webm" type="video/mp4" />
          </video>
        </div>
        <div className={styles.textDiv}>
          <p className={styles.textTop}>RAMHEE</p>
          <p className={styles.textBottom}>YEON</p>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
}
