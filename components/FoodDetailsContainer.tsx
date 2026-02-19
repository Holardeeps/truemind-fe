"use client";

import { extras, proteins } from "@/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "./ui/field";
import { Inventory } from "@/types";

type FoodDetailsProp = {
  food: Inventory;
};

const FoodDetailsContainer = ({ food }: FoodDetailsProp) => {
  // State to handle the selcted protein which is "Fried Chicken by default"
  const [selectedProtein, setSelectedProtein] = useState("Fried Chicken");
  //   State to collate the additional slide dishes selected by the user into an array
  const [selectedSides, setSelectedSides] = useState<string[]>([]);

  const router = useRouter();

  return (
    <div className="bg-white w-full p-8 space-y-2.5">
      <img
        src="/icons/cancel.png"
        alt="Close page icon"
        className="place-self-end w-[31.45px] h-[24.46px] cursor-pointer"
        onClick={() => router.back()} //send the user back to the previous page
      />
      <div className="space-y-4 mb-8">
        <h2 className="text-[32px] font-bold leading-10.5">{food.name}</h2>
        <span className="font-semibold text-2xl text-primary-orange">
          ₦{food.price}
        </span>
        <p className="text-base -tracking-tighter font-normal mt-2.75">
          {food.description}
        </p>
      </div>

      <div className="flex gap-10 text-dark-gray text-base -tracking-tighter mb-8">
        <span className="flex items-center justify-center gap-2.25">
          {" "}
          <img src="/icons/timer.png" alt="timer" className="size-6" /> Mildly
          spicy
        </span>
        <span className="flex items-center justify-center gap-2.25 ">
          {" "}
          <img src="/icons/timer.png" alt="timer" className="size-6" />{" "}
          Vegetarian option available
        </span>
        <span className="flex items-center justify-center gap-2.25 text-primary-blue">
          {" "}
          <img src="/icons/timer.png" alt="timer" className="size-6" /> View
          Allergies
        </span>
      </div>

      <div className="space-y-4.75">
        <div className="py-2.5 space-y-4.75">
          <h3 className="text-2xl font-medium capitalize">
            choose your protein
          </h3>

          <div className="space-y-4.75">
            {proteins.map((item) => (
              <div
                key={item.name}
                onClick={() => setSelectedProtein(item.name)}
                className="flex items-center justify-between border border-[#BDBDBD] rounded-xl p-4 cursor-pointer transition"
              >
                <div className="flex items-center gap-4">
                  {/* Circle for selcected protein choice of user (fried chicken by default) */}
                  <div
                    className={`w-8.5 h-8.5 rounded-full border-4 flex items-center justify-center border-primary-orange transition`}
                  >
                    {selectedProtein === item.name && (
                      <div className="w-5 h-5 bg-primary-orange rounded-full"></div>
                    )}
                  </div>

                  <span className="text-[16px] -tracking-tighter">
                    {item.name}
                  </span>
                </div>

                <span className="text-[16px] -tracking-tighter">
                  {item.price ? `+₦${item.price}` : "(Default)"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="py-2.5 space-y-4.75">
          <h3 className="text-2xl font-medium capitalize">
            extra sides (optional)
          </h3>

          <div className="space-y-4.75">
            {extras.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  setSelectedSides((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((side) => side !== item.id)
                      : [...prev, item.id],
                  );
                }}
                className="flex items-center justify-between border border-[#BDBDBD] rounded-xl p-4 cursor-pointer transition"
              >
                <div className="flex items-center gap-4">
                  {/* Square for side dishes options*/}
                  <div
                    className={`w-8.5 h-8.5 rounded-lg border-2 flex items-center justify-center transition
        ${
          selectedSides.includes(item.id)
            ? "border-primary-orange border-4"
            : "border-gray-300"
        }`}
                  >
                    {selectedSides.includes(item.id) && (
                      <div className="w-5 h-5 bg-primary-orange rounded-sm"></div>
                    )}
                  </div>

                  <span className="text-[16px] -tracking-tighter ">
                    {item.name}
                  </span>
                </div>

                <span className="text-[16px] -tracking-tighter">
                  +₦{item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <FieldSet className="w-full">
            <FieldGroup>
              <Field>
                <FieldLabel
                  htmlFor="feedback"
                  className="text-2xl font-medium capitalize"
                >
                  special instructions
                </FieldLabel>
                <textarea
                  id="feedback"
                  placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh
food is tasty"
                  rows={6}
                  className="border border-[#BDBDBD] rounded-sm text-[16px] font-medium p-2"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsContainer;
