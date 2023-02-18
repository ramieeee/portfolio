"use client";
import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <>
      <Logo
        onClick={() => {
          router.push("/workspace");
        }}
      />
      {children}
    </>
  );
}
