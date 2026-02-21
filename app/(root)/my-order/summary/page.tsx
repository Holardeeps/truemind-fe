"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import Link from "next/link";

const page = () => {
  //state to handle the delivery option choice from the client
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");

  return (
    <section className="min-h-screen px flex items-center justify-center">
      {/* Order Summary */}
      <div className="w-171 bg-white rounded-sm py-5 px-4 space-y-6">
        <h2 className="text-3xl font-bold py-6 capitalize border-b border-stroke">
          order summary
        </h2>

        <div className="space-y-4 w-full">
          <h3 className="text-2xl font-medium">Add a Promo Code</h3>

          <div className="w-full flex items-center gap-2 text-black mb-8">
            <input
              type="text"
              placeholder="Enter Code here"
              className="flex-1 py-3.75 px-2.5 h-13.5 border border-stroke rounded-lg placeholder:text-base placeholder:text-details uppercase placeholder:capitalize placeholder:tracking-tighter text-lg focus-within:ring-2 focus-within:ring-primary-orange outline-none"
            />

            <Link href={`/sign-in`}>
              <Button className="px-8 py-3.75 w-40 h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-lg cursor-pointer">
                Login
              </Button>
            </Link>
          </div>

          <div className="text-dark-gray font-medium text-base space-y-2.5 px-1 mb-6 border-b border-stroke pb-4">
            <p className="flex items-center justify-between">
              <span className="capitalize">subtotal</span>
              <span className="">₦{`9,200`}</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="capitalize">delivery fee</span>
              <span className="">₦{`1,200`}</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="capitalize">service fee</span>
              <span className="">₦{`400`}</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="capitalize">tax</span>
              <span className="">₦{`0`}</span>
            </p>
          </div>

          <div className=" space-y-4 w-full">
            <div className="flex items-center justify-between text-details font-semibold text-2xl capitalize py-4 px-1">
              <h3>total</h3>
              <h3>₦{`10,800`}</h3>
            </div>
            <div className="w-full flex items-center justify-center text-white">
              <h2
                className={`flex-1 text-center leading-12 text-base tracking-tighter h-13 py-3.7 px-2.5 rounded-tl-md rounded-bl-md cursor-pointer ${deliveryMethod === "delivery" ? "bg-primary-orange" : "bg-stroke"}`}
                onClick={() => setDeliveryMethod("delivery")}
              >
                Delivery
              </h2>
              <h2
                className={`flex-1 text-center leading-12 text-base tracking-tighter h-13 py-3.7 px-2.5 rounded-tr-md rounded-br-md cursor-pointer ${deliveryMethod === "pickup" ? "bg-primary-orange" : "bg-stroke"}`}
                onClick={() => setDeliveryMethod("pickup")}
              >
                Pick up
              </h2>
            </div>

            <Field>
              <FieldLabel
                htmlFor="feedback"
                className="text-2xl font-medium capitalize"
              >
                Special Instructions for Restaurant
              </FieldLabel>
              <textarea
                id="feedback"
                placeholder={`E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty`}
                rows={6}
                className="border border-[#BDBDBD] rounded-sm text-[16px] font-medium p-2 placeholder:text-black"
              />
            </Field>

            <Button className="px-8 py-3.75 w-full h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-lg cursor-pointer">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
