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
    <div className="flex w-full border border-stroke rounded-sm md:py-1 px-2 md:px-6 gap-4 md:gap-11.75 items-center justify-center">
      <Image
        src={`/images/category-1.png`}
        alt={`food image`}
        width={190}
        height={173}
        className="rounded-sm md:w-47.5 md:h-43.25 max-sm:w-30 max-sm:h-29 max-sm:overflow-hidden max-md:object-cover max-md:h-full"
      />

      {/* Right details container */}
      <div className="flex-1 max-md:flex-col max-md:gap-2 max-md:max-w-full flex gap-11.75 items-center justify-between">
        <div className="space-y-8 gap-4.5 max-md:space-y-1 max-md:gap-0">
          <h3 className="font-bold text-3xl max-md:text-base max-md:font-semibold">
            Jollof Rice & Fried Chicken
          </h3>
          <p className="text-dark-gray font-medium text-2xl max-md:text-[12px]">
            With plantain, extra pepper sauce
          </p>
        </div>
        <div className="flex items-center gap-11.75 max-md:w-full max-md:gap-2 justify-between text-black transition-colors">
          <img
            src="/icons/plus.png"
            alt="Increment icon"
            className="cursor-pointer hover:border-primary-orange hover:border-2 hover:rounded-2xl duration-300 ease-in-out w-7.5 h-7.5 max-md:w-4.5 max-md:h-4.5"
            onClick={increment}
          />
          {/* <span
            className="w-7.5 max-md:w-4 max-md:h-4 h-7.5 bg-[#BDBDBD] text-4xl max-md:text-2xl max-md:leading-1 leading-7.5 rounded-md text-center hover:bg-primary-orange hover:text-soft-gray duration-300 ease-in-out cursor-pointer"
            onClick={increment}
          >
            +
          </span> */}
          <span className="font-medium text-[51.53px] max-md:text-[20px] md:leading-18.25">
            {count}
          </span>
          {/* <span
            className="w-7.5 h-7.5 bg-[#BDBDBD] text-4xl leading-6.5 rounded-md text-center hover:bg-primary-orange hover:text-soft-gray duration-300 ease-in-out cursor-pointer"
            onClick={decrement}
          >
            -
          </span> */}
          <img
            src="/icons/minus.png"
            alt="Decrement Icon"
            className="cursor-pointer hover:border-primary-orange hover:border-2 hover:rounded-2xl duration-300 ease-in-out w-7.5 h-7.5 max-md:w-4.5 max-md:h-4.5"
            onClick={decrement}
          />
        </div>
        <span className="text-primary-orange font-bold text-[32px] max-md:hidden leading-10.5">{`3,200`}</span>
        <span className="bg-primary-orange text-white w-7 h-6 text-xl max-md:hidden leading-5.5 rounded-sm text-center duration-300 hover:bg-[#f3761c]">
          x
        </span>
        <div className="md:hidden max-md:w-full flex items-center justify-between transition-colors">
          <span className="text-primary-orange font-bold text-[32px] max-md:text-base leading-10.5">{`3,200`}</span>
          {/* <span className="bg-primary-orange text-white w-7 h-6 text-xl leading-5.5 rounded-sm text-center duration-300 hover:bg-[#f3761c] max-md:w-4.5 max-md:h-4.5">
            x
          </span> */}
          <img
            src="/icons/cancel.png"
            alt="Cancel order"
            className="max-md:w-5 max-md:h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
