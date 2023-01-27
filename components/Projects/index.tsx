import styles from "./Projects.module.scss";

export default function Projects(): JSX.Element {
  return (
    <>
      <div className={styles.Projects}>
        <div className={styles.projectsGlowText}>
          <span>Projects</span>
        </div>

        <div className={styles.container}></div>
      </div>
    </>
  );
}
