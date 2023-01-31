import styles from "./Projects.module.scss";

export default function Projects({ data }: any): JSX.Element {
  return (
    <>
      <div className={styles.Projects}>
        <div className={styles.projectsGlowText}>
          <span>Projects</span>
        </div>
        <button onClick={() => console.log(data)}>test</button>

        <div className={styles.container}></div>
      </div>
    </>
  );
}
