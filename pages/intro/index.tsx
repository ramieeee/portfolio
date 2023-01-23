import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div className={styles.Intro}>
      <div>SausageDog</div>
      <div className={styles.welcomeText}>Welcome to Ramhee's work space</div>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <p className={styles.infoText}>Work Space with Introduction</p>
          <p className={styles.infoText}>See my work</p>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.infoText}>Contact</p>
          <p className={styles.infoText}>Check out how to reach me</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
