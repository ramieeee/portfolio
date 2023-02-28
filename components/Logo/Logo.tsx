"use client";
import { useRef, useEffect } from "react";
import { MouseEventHandler } from "react";
import styles from "./Logo.module.scss";
import DachshundIcon from "@/components/icons/DachshundIcon/DachshundIcon";

interface Props {
  onClick: MouseEventHandler<HTMLDivElement>;
  isLogo: string;
}

export default function Logo({ onClick, isLogo }: Props) {
  return (
    <>
      <div
        className={isLogo === "1" ? styles.LogoAppear : styles.LogoDisappear}
        onClick={onClick}
      >
        <DachshundIcon width="40px" height="40px" color="#ffffff" />
      </div>
    </>
  );
}
