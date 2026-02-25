import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Inventory } from "@/types";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { Button } from "../ui/button";

type FoodCardProps = {
  item: Inventory;
  icon: boolean;
};

const FoodCard = ({ item, icon }: FoodCardProps) => {
  return (
    <Link
      href={`/food-details/${slugify(item.name)}`}
      className="max-md:max-w-125 overflow-hidden"
    >
      <Card
        className={`rounded-b-none group pt-0 overflow-hidden w-96.5 max-sm:w-90 gap-0 py-0 hover:shadow-lg ${icon && "max-md:flex max-md:flex-row max-md:p-1.5 max-md:rounded-sm max-md:w-full max-sm:w-full max-sm:mx-2 max-md:h-37"}`}
      >
        <CardHeader
          className={`px-0 overflow-hidden ${icon && "max-md:relative max-md:w-45 max-md:h-full max-md:flex-1/2"}`}
        >
          <Image
            src={item.img}
            alt={`${item.name} image`}
            width={386}
            height={222}
            // fill
            className={`object-cover group-hover:scale-110 transition-transform duration-300 ${icon && "max-md:w-45 max-md:h-full max-md:rounded-sm max-md:absolute max-md:inset-0"}`}
          />
        </CardHeader>

        <div className={`${icon && "max-sm:max-w-76.25 max-md:h-full"}`}>
          <CardContent
            className={`py-4 space-y-2 text-details ${icon && "max-md:py-0 max-md:space-y-0"}`}
          >
            <h3
              className={`text-[24px] font-semibold ${icon && "max-md:text-base max-md:mb-2"}`}
            >
              {item.name}
            </h3>
            <p
              className={`text-base font-medium h-12 ${icon ? "max-md:text-[12px]" : "line-clamp-2"}`}
            >
              {item.description}
            </p>
          </CardContent>
          <CardFooter
            className={`justify-between my-6 ${icon && "max-md:my-2"}`}
          >
            <span className={`text-primary-orange text-base ${icon && ""}`}>
              {item.price}
            </span>

            {icon ? (
              <img
                src="/icons/plus-bold.png"
                alt="plus icon"
                className={`${icon && "max-md:w-5 max-md:h-5"}`}
              />
            ) : (
              <Button className="w-36 h-12.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-[#ff7a44] border-[#FF7A18] border-2 rounded-lg cursor-pointer">
                Add to cart
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default FoodCard;
