// (auth) layout to wrap the "sign-in", "sign-up" and "welcome" components in the (auth) route group
// This allows the side image to be controlled by the layout before rendering components in this route group

import AuthImage from "@/components/auth/AuthImage";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full min-h-screen bg-soft-gray">
      <AuthImage />
      <div className="w-1/2 max-md:w-full flex items-center justify-center">
        {children}
      </div>
    </main>
  );
}
