import FoodCard from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { categories, inventory } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      {/* Hero section */}
      <section
        id="home"
        className="relative flex items-center justify-start px-12 w-full min-h-235.25"
      >
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

      <section className="container mx-auto pt-34.25 pb-17.25 space-y-12.5">
        {/* Container header */}
        <h2 className="text-center capitalize font-bold text-[32px] leading-10.5">
          popular categories
        </h2>

        <div className="flex items-center justify-center">
          <div className="grid gap-15.5 sm:grid-cols-2 xl:grid-cols-3 px-auto">
            {categories.map((category, idx) => (
              <Link href={`#`} key={idx} className="w-96.5 max-sm:w-86">
                <Card className="group pt-0 overflow-hidden w-full gap-0 py-0 hover:shadow-lg">
                  <CardContent className="px-0 overflow-hidden">
                    <Image
                      src={category.img}
                      alt={`${category.name} image`}
                      width={386}
                      height={222}
                      // fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </CardContent>
                  <CardFooter className="px-0 text-center justify-center font-semibold capitalize text-details max-sm:text-lg text-[24px] leading-8.5 max-sm:py-5 py-8 group-hover:bg-primary-orange group-hover:text-white transition-color duration-500 ease-in-out">
                    {category.name}
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs favorite */}
      <section className="container mx-auto py-34.25 space-y-12.5">
        {/* Container header */}
        <h2 className="text-center capitalize font-bold text-[32px] leading-10.5">
          chef's specials
        </h2>

        <div className="flex items-center justify-center">
          <div className="grid gap-15.5 sm:grid-cols-2 xl:grid-cols-3 px-auto">
            {inventory.map((foodItem, idx) => (
              <FoodCard item={foodItem} key={idx} icon={false} />
            ))}
          </div>
        </div>
      </section>

      {/*  */}
      <section className="relative flex items-center justify-start px-12 w-full min-h-152.5">
        {/* backgroung image with overlay */}
        <Image
          src={`/images/platter.png`}
          fill
          className="absolute inset-0 h-full w-full object-cover brightness-45"
          priority
          alt="Hero banner image"
        />

        {/* Hero text's */}
        <div className="relative text-white lg:w-2/3 space-y-8.5">
          <h1 className="font-bold text-[48px]">
            Introducing Our New Menu Additions!
          </h1>
          <h3 className="font-bold text-[24px] leading-10.5">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </h3>

          <Link href={"/explore"}>
            <Button className=" w-53.75 h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-[#ff7a44] border-[#FF7A18] border-2 rounded-lg cursor-pointer">
              Discover what's new
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
