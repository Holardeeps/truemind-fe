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
import { MenuIcon, X } from "lucide-react";

const NavBar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  // Automatically update active tab when route changes
  useEffect(() => {
    const current = navLinks.find((item) => item.href === pathname);
    if (current) setActiveTab(current.title);
  }, [pathname]);

  // useEffect(() => {
  //   if (showMenu) {
  //     const originalStyle = window.getComputedStyle(document.body).overflow;
  //     document.body.style.overflowY = "hidden";

  //     return () => {
  //       document.body.style.overflowY = originalStyle;
  //     };
  //   }
  // }, [showMenu]);

  return (
    <header className="sticky top-0 w-full h-22.5 max-md:h-12.25 bg-white z-30">
      <nav className="w-full h-full px-12 py-4.5 flex gap-11.25 items-center relative max-md:justify-between max-md:px-4">
        <Image
          src={"/images/ChuksKitchen.png"}
          alt="Chuks Kitchen Logo"
          height={41}
          width={183}
          className="hover:scale-y-105 w-auto h-auto max-md:w-33"
        />
        <ul className="flex items-center justify-around flex-1 capitalize text-base font-medium text-details max-md:hidden">
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

        <Link href={`/welcome`} className="max-md:hidden">
          <Button className="px-8 py-3.75 w-40 h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-lg cursor-pointer">
            Login
          </Button>
        </Link>

        <span className="md:hidden">
          {showMenu ? (
            <X
              className="w-6.25 h-6.25 cursor-pointer transition-all duration-500 ease-in-out"
              onClick={() => setShowMenu((prev) => !prev)}
            />
          ) : (
            <MenuIcon
              className="w-6.25 h-6.25 cursor-pointer transition-all duration-500 ease-in-out"
              onClick={() => setShowMenu((prev) => !prev)}
            />
          )}
        </span>

        {/* mobile navbar */}
        {showMenu && (
          <div
            className={`absolute w-full bg-white left-0 transition-all duration-500 ease-in-out z-50 ${showMenu ? "top-10 opacity-100" : "top-[-100vh] opacity-0"}`}
          >
            <ul className=" flex flex-col items-center justify-center mt-4 capitalize text-xl font-medium text-details md:hidden z-10 border-t-2 border-soft-orange">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={`${link.href}`}
                  className={`py-3 w-full text-center ${activeTab === link.title ? "bg-soft-orange/70 border-l-4 border-primary-orange font-bold text-white" : ""}`}
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  {link.title}
                </Link>
              ))}
            </ul>

            <Link href={`/welcome`}>
              <Button className="px-8 py-3.75 w-full h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-t-lg rounded-b-none cursor-pointer border-b-2 border-b-dark-orange">
                Login
              </Button>
            </Link>
          </div>
        )}

        {showMenu && (
          <div
            className="fixed inset-0 top-10 bg-black/70 z-20 md:hidden"
            onClick={() => setShowMenu(false)}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
