import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      {/* Hero section */}
      <section className="relative flex items-center justify-start px-12 w-full min-h-235.25">
        {/* backgroung image with overlay */}
        <Image
          src={`/images/hero-banner.png`}
          fill
          className="absolute inset-0 h-full w-full object-cover brightness-45"
          priority
          alt="Hero banner image"
        />

        {/* Hero text's */}
        <div className="relative text-white lg:w-2/3 space-y-8.5">
          <h1 className="font-bold text-5xl max-w-3xl">
            The Heart of Nigerian Home Cooking
          </h1>
          <h3 className="font-bold text-[32px] leading-10.5">
            Handcrafted with passion, delivered with care.
          </h3>

          <Link href={"/explore"}>
            <Button className=" w-53.75 h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-[#ff7a44] border-[#FF7A18] border-2 rounded-lg cursor-pointer">
              Discover what's new
            </Button>
          </Link>

          {/* TODO: input search */}
        </div>
      </section>

      {/* Popular categories */}

      <section className="container mx-auto"></section>
    </div>
  );
};

export default page;
