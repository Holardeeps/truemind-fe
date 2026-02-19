import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Inventory } from "@/types";

type FoodCardProps = {
  item: Inventory;
  icon: boolean;
};

const FoodCard = ({ item, icon }: FoodCardProps) => {
  return (
    <Card className="rounded-b-none group pt-0 overflow-hidden w-96.5 max-sm:w-86 gap-0 py-0 hover:shadow-lg">
      <CardHeader className="px-0 overflow-hidden">
        <Image
          src={item.img}
          alt={`${item.name} image`}
          width={386}
          height={222}
          // fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </CardHeader>
      <CardContent className="py-4 space-y-2 text-details">
        <h3 className="text-[24px] font-semibold">{item.name}</h3>
        <p
          className={`text-base font-medium h-12 ${icon ? "" : "line-clamp-2"}`}
        >
          {item.description}
        </p>
      </CardContent>
      <CardFooter className="justify-between my-6">
        <span className="text-primary-orange text-base">{item.price}</span>

        {icon ? (
          <img src="/icons/plus-bold.png" alt="plus icon" className="" />
        ) : (
          <Button className="w-36 h-12.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-[#ff7a44] border-[#FF7A18] border-2 rounded-lg cursor-pointer">
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
