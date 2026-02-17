// (root) layout for components outside of the (auth) route group. This enables the Navbar component to be shared across this group

import NavBar from "@/components/shared/NavBar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <NavBar />
      {children}
    </main>
  );
}
