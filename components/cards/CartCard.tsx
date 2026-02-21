"use client";

import { useState } from "react";
import Image from "next/image";

const CartCard = () => {
  const [count, setCount] = useState(1);

  //Mimicking increment and decrement functions
  // decrease item count in cart and return if count === 0
  const decrement = () => {
    if (count === 0) return;

    setCount((prev) => prev - 1);
  };
  //increase item count in cart
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex w-full border border-stroke rounded-sm py-1 px-6 gap-11.75 items-center justify-center">
      <Image
        src={`/images/category-1.png`}
        alt={`food image`}
        width={190}
        height={173}
        className="rounded-sm md:w-47.5 md:h-43.25"
      />

      {/* Right details container */}
      <div className="flex-1 flex gap-11.75 items-center justify-between">
        <div className="space-y-8 gap-4.5">
          <h3 className="font-bold text-3xl">Jollof Rice & Fried Chicken</h3>
          <p className="text-dark-gray font-medium text-2xl">
            With plantain, extra pepper sauce
          </p>
        </div>
        <div className="flex items-center gap-11.75 justify-between text-black transition-colors">
          <span
            className="w-7.5 h-7.5 bg-[#BDBDBD] text-4xl leading-7.5 rounded-md text-center hover:bg-primary-orange hover:text-soft-gray duration-300 ease-in-out cursor-pointer"
            onClick={increment}
          >
            +
          </span>
          <span className="font-medium text-[51.53px] leading-18.25">
            {count}
          </span>
          <span
            className="w-7.5 h-7.5 bg-[#BDBDBD] text-4xl leading-6.5 rounded-md text-center hover:bg-primary-orange hover:text-soft-gray duration-300 ease-in-out cursor-pointer"
            onClick={decrement}
          >
            -
          </span>
        </div>
        {/* <div className="flex items-center justify-between transition-colors"> */}
        <span className="text-primary-orange font-bold text-[32px] leading-10.5">{`3,200`}</span>
        <span className="bg-primary-orange text-white w-7 h-6 text-xl leading-5.5 rounded-sm text-center duration-300 hover:bg-[#f3761c]">
          x
        </span>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CartCard;
