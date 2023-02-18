"use client";
import { MouseEventHandler } from "react";
import styles from "./Logo.module.scss";
import DachshundIcon from "@/components/icons/DachshundIcon/DachshundIcon";

interface OnClick {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default function Logo({ onClick }: OnClick) {
  return (
    <>
      <div className={styles.Logo} onClick={onClick}>
        <DachshundIcon width="40px" height="40px" color="#ffffff" />
      </div>
    </>
  );
}
