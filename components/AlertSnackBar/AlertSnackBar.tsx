"use client";

import { useState, useEffect } from "react";
import styles from "./Snackbar.module.scss";
import SnackbarObj from "@/interface/SnackbarObj";

interface OnOff {
  isSnackbarOn: boolean;
  snackbarProps: SnackbarObj;
}

export default function AlertSnackBar({ isSnackbarOn, snackbarProps }: OnOff) {
  const [color, setColor] = useState<string>("#000000");
  const [textShadow, setTextShadow] = useState<string>("#000000");

  useEffect(() => {
    setColor(snackbarProps.color);
    setTextShadow(snackbarProps.textShadow);
  }, [snackbarProps]);

  return (
    <div
      className={isSnackbarOn ? styles.snackbarBlink : styles.Snackbar}
      style={{
        textShadow: textShadow,
      }}
    >
      <div
        style={{
          color: color,
        }}
      >
        {snackbarProps.message}
      </div>
    </div>
  );
}
