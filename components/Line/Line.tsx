import { forwardRef } from "react";
import styles from "./Line.module.scss";

interface Props {
  width: string;
  margin: string;
  borderBottom: string;
}

const Line = forwardRef<HTMLDivElement, Props>(
  ({ width, margin, borderBottom }, ref) => {
    return (
      <>
        <div
          style={{
            width: width,
            margin: margin,
            borderBottom: borderBottom,
          }}
          ref={ref}
          className={styles.Line}
        />
      </>
    );
  }
);

Line.displayName = "Line";

export default Line;
