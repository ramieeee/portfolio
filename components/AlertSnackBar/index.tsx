import styles from "./Snackbar.module.scss";
import SnackbarObj from "@/interface/SnackbarObj";

interface OnOff {
  isSnackbarOn: boolean;
  snackbarProps: SnackbarObj;
}

export default function AlertSnackBar({ isSnackbarOn, snackbarProps }: OnOff) {
  return (
    <div
      className={isSnackbarOn ? styles.snackbarBlink : styles.Snackbar}
      style={{
        textShadow: snackbarProps.textShadow,
      }}
    >
      <div
        style={{
          color: snackbarProps.color,
        }}
      >
        {snackbarProps.message}
      </div>
    </div>
  );
}
