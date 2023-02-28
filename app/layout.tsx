"use client";
import "./globals.scss";
import { useState } from "react";
import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scroll, setScroll] = useState<string | number>(0);
  const [isLogo, setIsLogo] = useState<string>("1");
  const router = useRouter();

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    const newScrollY = e.currentTarget.scrollTop;
    if (newScrollY < scroll) {
      setIsLogo("1");
    } else {
      setIsLogo("0");
    }
    setScroll(e.currentTarget.scrollTop);
  };

  return (
    <html lang="en">
      <head />
      <body onScroll={onScroll}>
        <Logo
          onClick={() => {
            router.push("/workspace");
          }}
          isLogo={isLogo}
        />
        {children}
      </body>
    </html>
  );
}
