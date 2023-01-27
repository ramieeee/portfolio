import styles from "./Interest.module.scss";

export default function (): JSX.Element {
  return (
    <>
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
