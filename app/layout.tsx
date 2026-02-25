import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chuks Kitchen",
  description: "Your Authentic Taste of Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
        {/* The footer is shared accross all screens. Hereby adding it at the App's root layout. */}
        <Footer />
      </body>
    </html>
  );
}
