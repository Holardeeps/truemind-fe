import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const navLinks = [
  { title: "home", href: "/" },
  { title: "explore", href: "/explore" },
  { title: "my orders", href: "/orders" },
  { title: "account", href: "/my-account" },
  { title: "contact", href: "#" },
];

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full h-24 bg-white">
      <nav className="w-full h-full px-6 py-4 flex space-x-12 items-center relative">
        <Image
          src={"/images/ChuksKitchen.png"}
          alt="Chuks Kitchen Logo"
          height={41}
          width={183}
          className="hover:scale-y-105 w-auto h-auto"
        />
        <ul className="flex items-center justify-between flex-1">
          {navLinks.slice(0, 4).map((link) => (
            <Link key={link.href} href={`${link.href}`} className="capitalize">
              {link.title}
            </Link>
          ))}
        </ul>

        <Button className="px-8 py-3 w-40 h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-xl cursor-pointer">
          Login
        </Button>
      </nav>
    </div>
  );
};

export default NavBar;
