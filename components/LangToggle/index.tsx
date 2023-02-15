import styles from "./LangToggle.module.scss";

export default function LangToggle(): JSX.Element {
  return (
    <div className={styles.LangToggle}>
      <span className={styles.container}>toggle</span>
    </div>
  );
}
