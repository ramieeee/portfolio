import Logo from "@/components/Logo/Logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Logo />
      {children}
    </>
  );
}
