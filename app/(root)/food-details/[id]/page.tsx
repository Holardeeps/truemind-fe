import FoodDetailsContainer from "@/components/FoodDetailsContainer";
import { inventory } from "@/constants";
import { getRandomFoodItem, slugify } from "@/lib/utils";
import Image from "next/image";

type FoodCardProps = {
  params: { id: string };
};

const FoodCard = async ({ params }: FoodCardProps) => {
  const { id } = await params;

  const food =
    inventory.find((item) => id === slugify(item.name)) ||
    getRandomFoodItem(inventory);

  if (!food || food === undefined)
    return new Error("Could'nt get this exact food from the Inventory..");

  return (
    <section className="flex max-md:flex-col w-full min-h-screen" id="home">
      <div className="relative w-1/2 max-md:h-73.25 max-md:w-full overflow-hidden">
        <Image
          // src={food.img} // this image gets distorted on render because the images from the food items dont have enough quality to take half the screen width on full screen
          src={`/images/hero-banner.png`}
          fill
          alt={food.name}
          className="object-cover brightness-95 w-full h-full max-md:hidden"
        />
        <Image
          src={food.img} // this image gets distorted on render because the images from the food items dont have enough quality to take half the screen width on full screen
          // src={`/images/hero-banner.png`}
          fill
          alt={food.name}
          className="object-cover brightness-95 w-full h-full md:hidden"
        />
      </div>
      <div className="w-1/2 max-md:w-full flex items-center justify-center p-12 max-md:p-0">
        <FoodDetailsContainer food={food} />
      </div>
    </section>
  );
};

export default FoodCard;
