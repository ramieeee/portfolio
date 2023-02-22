"use client";
import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/navigation";
import StarIcon from "@/components/icons/StarIcon/StarIcon";

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
      {/* <StarIcon width="60%" height="60%" color="#ffffff" /> */}
      {children}
    </>
  );
}
