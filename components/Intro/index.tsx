import styles from "./Intro.module.scss";

export default function Intro({ data }: any): JSX.Element {
  return (
    <div className={styles.Intro}>
      <div className={styles.textContainer}>
        <div className={styles.introName}>
          <span>Ramhee Yeon</span>
        </div>
        <div className={styles.introTextContainer}>
          <span className={styles.introTextLeft}>
            Welcome! my name is Ramhee Yeon. I am a developer and a software
            engineer. I am also a postgraduate student majoring in AI
          </span>
          <span className={styles.introTextRight}>
            Web developer, software engineer, postgraduate
          </span>
        </div>
        <div className={styles.line} />
      </div>
    </div>
  );
}
