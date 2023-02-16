import { forwardRef } from "react";

interface Props {
  width: string;
  margin: string;
  borderBottom: string;
}

const Line = forwardRef<HTMLDivElement, Props>(
  ({ width, margin, borderBottom }, ref) => {
    return (
      <div>
        <div
          style={{
            width: width,
            margin: margin,
            borderBottom: borderBottom,
          }}
          ref={ref}
        />
      </div>
    );
  }
);

export default Line;
