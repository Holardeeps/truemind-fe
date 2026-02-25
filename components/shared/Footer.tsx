import { navLinks } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="background w-full h-full lg:h-112.25 relative space-y-4 px-16 max-md:hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-27.5 py-16 text-white">
        <div className="space-y-4">
          <Image
            src={"/images/ChuksKitchen.png"}
            alt="Chuks Kitchen Logo"
            height={38}
            width={229.25}
            className="hover:scale-y-105 w-auto h-auto"
          />
          <p className="text-2xl max-lg:text-lg">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl capitalize">quick links</h2>

          <div className="flex flex-col gap-4 opacity-75">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href} className="text-[12px]">
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl capitalize">contact us</h2>

          <div className="flex flex-col gap-4 text-[12px] opacity-75">
            <a href="#" className="">
              +234 801 234 5678
            </a>
            <a href="#" className="">
              hello@chukskitchen.com
            </a>
            <a href="#" className="">
              123 Taste Blvd, Lagos , Nigeria.
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-[12px] opacity-75">
          <p className="">
            <a href="#" className="inline">
              facebook
            </a>
          </p>
          <p className="">
            <a href="#" className="inline">
              twitter
            </a>
          </p>
          <p className="">
            <a href="#" className="inline">
              linkedin
            </a>
          </p>
          <p className="">
            <a href="#" className="inline">
              instagram
            </a>
          </p>
        </div>
      </div>

      <div className="relative flex justify-between items-center">
        <p className=" text-white text-[12px] opacity-65">
          © 2020 Lift Media. All rights reserved.
        </p>

        <span className="absolute w-13 h-13 bottom-0 right-0 md:right-24">
          <a href="#home" className="">
            <img
              src="/icons/arrow-up.png"
              alt="scroll-top pointer"
              className="w-full h-full object-cover animate-bounce"
            />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
