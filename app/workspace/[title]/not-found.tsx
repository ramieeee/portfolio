"use client";
import styles from "./Project.module.scss";

export default function NotFoundError() {
  return (
    <div className={styles.NotFoundError}>
      <span>404 Error</span>
      <span>Page not found</span>
    </div>
  );
}
