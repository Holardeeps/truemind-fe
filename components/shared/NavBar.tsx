"use client";

// hooks
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

//  next tools
import Image from "next/image";
import Link from "next/link";

// UI
import { Button } from "../ui/button";
import { navLinks } from "@/constants";

const NavBar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("home");

  // Automatically update active tab when route changes
  useEffect(() => {
    const current = navLinks.find((item) => item.href === pathname);
    if (current) setActiveTab(current.title);
  }, [pathname]);

  return (
    <header className="sticky top-0 w-full h-22.5 bg-white z-20">
      <nav className="w-full h-full px-12 py-4.5 flex gap-11.25 items-center relative">
        <Image
          src={"/images/ChuksKitchen.png"}
          alt="Chuks Kitchen Logo"
          height={41}
          width={183}
          className="hover:scale-y-105 w-auto h-auto"
        />
        <ul className="flex items-center justify-around flex-1 capitalize text-base font-medium text-details">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={`${link.href}`}
              className={`${activeTab === link.title ? "text-primary-orange font-bold" : ""}`}
            >
              {link.title}
            </Link>
          ))}
        </ul>

        <Link href={`/sign-in`}>
          <Button className="px-8 py-3.75 w-40 h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-lg cursor-pointer">
            Login
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
