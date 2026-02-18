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
          alt=""
          fill
          className="object-fill"
          aria-label=""
          loading="eager"
          sizes="50vw"
        />
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`flex items-center justify-center w-full h-full bg-amber-400/50 ${pathname === "/welcome" && "hidden"}`}
      >
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        >
          <h2>Chuks</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
            magni ipsam commodi cumque eos eius. Officiis illum optio eum
            nostrum?
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthImage;
