"use client";
import ConfidentialProjList from "@/interface/ConfidentialProjList";

import styles from "./Project.module.scss";

interface Props {
  data: ConfidentialProjList;
}

export default function ProjectClient({ data }: Props) {
  return (
    <div className={styles.Project}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{data.title}</span>
      </div>
      <img src={data.imageUrl} alt={`Image of ${data.title}`} />
      <div className={styles.descContainer}>
        <span className={styles.desc}>{data.descriptionEng}</span>
      </div>

      <div className={styles.skillsTextContainer}>
        <span className={styles.skillsText}>Skills used</span>
      </div>

      {data.skills.map((data) => {
        return (
          <div className={styles.skillsContainer} key={data}>
            <span className={styles.skills}>{data}</span>
          </div>
        );
      })}
    </div>
  );
}
