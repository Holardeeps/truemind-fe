import FoodCard from "@/components/cards/FoodCard";
import { inventory, menuCategories } from "@/constants";
import Image from "next/image";

const Explore = () => {
  // displaying 6 food items for th "popular" category and 3 items for every other category
  const getItemsForMenu = (menu: string) => {
    if (menu.toLowerCase() === "popular") {
      return inventory.slice(0, 6); // first 6 items
    }

    // shuffle inventory to randomly display 3 different food items
    const shuffled = [...inventory].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 3); // 3 random items
  };

  return (
    <div className="">
      <section
        className="relative flex items-center justify-start px-12 w-full min-h-146.5"
        id="home"
      >
        {/* backgroung image with overlay */}
        <Image
          src={`/images/explore-banner.webp`}
          fill
          className="absolute inset-0 h-full w-full object-cover brightness-45"
          priority
          alt="Hero banner image"
        />

        {/* Hero text's */}
        <div className="relative text-white lg:w-2/3 space-y-8.5 max-md:space-y-4.5">
          <h1 className="font-bold text-5xl max-md:text-[32px] max-md:text-base">
            Chuks Kitchen
          </h1>
          <h3 className="font-bold text-[24px] leading-10.5">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </h3>
        </div>
      </section>

      {/* Menu categories */}
      <section className="container mx-auto bg-white rounded-t-lg space-y-3.5 mt-18 py-4.5 max-w-338.5">
        <h2 className="capitalize font-semibold text-[24px] leading-8.5 px-6.5">
          menu categories
        </h2>
        <ul className="">
          {menuCategories.map((menu) => (
            <li
              className={`font-medium text-[24px] max-md:text-[20px] leading-8.5 text-[#000000] pl-6.5 py-1 capitalize ${menu === "popular" && "border-l-4 border-primary-orange bg-light-orange"} cursor-pointer`}
              key={menu[0]}
            >
              <a href={`#${menu}`} className="">
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* menu categories with food carts */}
      {menuCategories.map((menu, idx) => (
        <section
          className="container mx-auto my-12 max-md:pb-0 max-md:my-9"
          key={idx}
          id={menu}
        >
          {/* Container header */}
          <h2 className="capitalize font-bold text-[32px] max-md:text-[18px] leading-10.5 mb-4 2xl:ml-34">
            {menu}
          </h2>

          <div className="flex items-center justify-center">
            <div className="grid gap-15.5 max-md:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-auto max-md:gap-6 max-md:w-full">
              {getItemsForMenu(menu).map((foodItem, idx) => (
                <FoodCard item={foodItem} key={idx} icon={true} />
              ))}
            </div>
          </div>
          <p className="md:hidden mt-5 text-primary-blue text-base text-center">
            View All Categories
          </p>
        </section>
      ))}
    </div>
  );
};

export default Explore;
