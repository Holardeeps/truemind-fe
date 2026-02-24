"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AuthImage = () => {
  const pathname = usePathname();

  return (
    <div className=" flex h-screen w-1/2 sticky top-0 aspect-video max-md:hidden">
      <div className="absolute w-full h-full -z-10">
        <Image
          src={"/images/AuthGroupImage.png"}
          alt="Authentication image background"
          fill
          className="object-fill"
          aria-label="Authentication image background"
          loading="eager"
          sizes="50vw"
        />
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`flex items-center justify-center w-full h-full bg-primary-orange/70 ${pathname === "/welcome" && "hidden"}`}
      >
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          className="text-center max-w-102.5 space-y-3.5 text-white"
        >
          <h2 className="font-bold text-5xl">Chuks Kitchen</h2>
          <p className="font-medium text-2xl">
            Your journey to delicious, authentic Nigerian meals starts here.
            Sign up or log in to order your favorites today!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthImage;
