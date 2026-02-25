"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import Link from "next/link";
import { paymentTypes } from "@/constants";
import Image from "next/image";

const page = () => {
  //state to handle the delivery option choice from the client
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  // payment option on payment modal
  const [paymentOption, setPaymentOption] = useState("card");

  //steps to define order-path and modals
  const [step, setStep] = useState("order-summary");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  // for loading UI
  const petals = 8;
  const duration = 1.55;

  // next step
  const nextStep = async (next: string) => {
    setLoading(true);
    let time: number;

    if (next === "success" ? (time = 2500) : (time = 1000))
      await new Promise((res) => setTimeout(res, time));
    setLoading(false);
    setStep(next);
  };

  return (
    // remove flex col and gap after spliting code into smaller components
    <section
      className="px-5.75 py-10 flex flex-col gap-8 items-center justify-center"
      id="home"
    >
      {/* Loading UI */}
      {loading && (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="relative h-40 w-40 max-md:w-12.5 max-md:h-12.5">
            {[...Array(petals)].map((_, i) => (
              <div
                className="animate-petal absolute left-[45%] top-0 bg-stroke w-[7%] h-[30%] rounded-full"
                key={i}
                style={{
                  transform: `rotate(${i * 45}deg)`,
                  transformOrigin: `50% 160%`,
                  animationDelay: `${(i * duration) / petals}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* Order Summary */}

      {!loading && step === "order-summary" && (
        <div className="w-171 max-md:w-full bg-white rounded-sm py-5 px-4 space-y-6">
          <h2 className="text-3xl font-bold py-6 capitalize border-b border-stroke">
            order summary
          </h2>

          <div className="space-y-4 w-full">
            <h3 className="text-2xl font-medium">Add a Promo Code</h3>

            <div className="w-full flex items-center gap-2 text-black mb-8">
              <input
                type="text"
                placeholder="Enter Code here"
                className="flex-1 max-md:w-1/2 py-3.75 px-2.5 h-13.5 border border-stroke rounded-lg placeholder:text-base placeholder:text-details uppercase placeholder:capitalize placeholder:tracking-tighter text-lg focus-within:ring-2 focus-within:ring-primary-orange outline-none"
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

              <Button
                className="px-8 py-3.75 w-full h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-lg cursor-pointer"
                onClick={() => nextStep("delivery")}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Delivery details  */}

      {!loading && step === "delivery" && (
        <div className="w-171 max-md:w-full bg-white rounded-sm py-5 px-4 space-y-6">
          <h2 className="text-3xl font-bold py-6 capitalize border-b border-stroke">
            delivery details
          </h2>

          <div className="flex gap-6 justify-between border border-[#BDBDBD] rounded-sm text-[16px] font-medium">
            <textarea
              id="feedback"
              placeholder={`Home: 123 Main Street, Victoria Island, Lagos Apt 4B, Opposite Mega Plaza`}
              rows={5}
              className="flex-1 p-2 pt-3 placeholder:text-black outline-none"
            />
            <span className="text-primary-blue max-md:hidden pt-5 px-3 cursor-pointer h-fit">
              change address
            </span>
          </div>

          <Field>
            <FieldLabel
              htmlFor="feedback"
              className="text-2xl font-medium capitalize"
            >
              delivery time
            </FieldLabel>
            <textarea
              id="feedback"
              placeholder={`ASAP(30-25)`}
              rows={2}
              className="border border-[#BDBDBD] rounded-sm text-[16px] font-medium p-2 placeholder:text-black"
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="feedback"
              className="text-2xl font-medium capitalize"
            >
              delivery Instructions (optional)
            </FieldLabel>
            <textarea
              id="feedback"
              placeholder={`E.g leave at the front of the door, knock twice...................`}
              rows={4}
              className="border border-[#BDBDBD] rounded-sm text-[16px] font-medium p-2 placeholder:text-black"
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="feedback"
              className="text-2xl font-medium capitalize"
            >
              contact address
            </FieldLabel>
            <textarea
              id="feedback"
              placeholder={`+234 801 234 5678`}
              rows={2}
              className="border border-[#BDBDBD] rounded-sm text-[16px] font-medium p-2 placeholder:text-black"
            />
          </Field>

          <Button
            className="px-8 py-3.75 w-full h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-lg cursor-pointer"
            onClick={() => nextStep("payment")}
          >
            Confirm
          </Button>
        </div>
      )}

      {/* Payment details */}

      {!loading && step === "payment" && (
        <div className="w-171 max-md:w-full bg-white rounded-sm py-5 px-4 space-y-6 max-md:mb-30">
          <h2 className="text-3xl font-bold py-6 capitalize border-b border-stroke">
            payment details
          </h2>

          <div className="space-y-2">
            <h3 className="font-semibold text-[20px] leading-7.5 text-text-dark capitalize">
              pay with:
            </h3>
            <div className="flex items-center gap-2.5 p-2.5 text-text-dark mb-6">
              {paymentTypes.map((paymentType) => (
                <div
                  key={paymentType}
                  className="flex-1 flex items-center justify-start gap-4 capitalize"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 transition cursor-pointer ${paymentOption === paymentType ? "border-click" : "border-stroke"}`}
                      onClick={() => setPaymentOption(paymentType)}
                    >
                      {paymentOption === paymentType && (
                        <div className="w-2.5 h-2.5 bg-[#2FBD6A] rounded-full"></div>
                      )}
                    </div>
                    <span
                      className={`text-base ${paymentOption === paymentType ? "text-text-dark" : "text-stroke"}`}
                    >
                      {paymentType}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-base font-medium text-text-dark capitalize space-y-2 p-2.5 w-full">
              <div className="space-y-4">
                <h3 className="">card number</h3>

                <input
                  type="number"
                  className="border-2 border-stroke py-3 pl-4 rounded-sm w-full gap-2.5"
                  placeholder="1234  5678  9101  1121"
                  required
                />
              </div>

              <div className="flex w-full items-center gap-4.5 max-md:gap-2 py-2">
                <div className="flex-1 space-y-4">
                  <h3 className="">expiration date</h3>

                  <input
                    type="number"
                    className="border-2 border-stroke py-3 pl-4 rounded-sm w-full gap-2.5"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="flex-1 space-y-4 uppercase">
                  <h3 className="">cvv</h3>

                  <input
                    type="number"
                    className="border-2 border-stroke py-3 pl-4 rounded-sm w-full gap-2.5"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="text-stroke text-base leading-[140%] tracking-tighter flex items-center gap-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-stroke focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-orange"
                />
                <p className="hover:text-primary-orange">Save card details</p>
              </div>
            </div>
            {/* payment button */}

            <Link href={``} onClick={() => nextStep("success")}>
              <Button className="px-8 py-3.75 w-full h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-lg cursor-pointer">
                {`Pay ₦9,900`}
              </Button>
            </Link>

            <p className="text-sm text-[#ACACAC] mt-4">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>
        </div>
      )}

      {/* success confirmation */}

      {!loading && step === "success" && (
        <div className="max-w-101.75 max-md:w-full flex flex-col items-center justify-center text-black mt-20 max-md:mb-30">
          <img
            src="/icons/check.png"
            alt="success icon"
            className="w-22.25 h-22.25 rounded-full max-md:w-10.75 max-md:h-10.75"
          />
          <div className="w-101.75 h-75 relative py-4 px-5 text-center">
            <div className="relative z-10">
              <p className="text-[17px] max-md:text-[15px] font-medium z-10">
                Order Placed Successfully!
              </p>
              <p className="text-[16px] max-md:text-[13px] font-normal">
                Your delicious Chuks Kitchen meal is on its way!
              </p>
            </div>
            <Image
              src={`/videos/success.gif`}
              alt="Order success cofirmation"
              className="absolute inset-0 w-full h-full object-cover z-0 max-md:py-4 max-md:px-5"
              unoptimized
              fill
            />
          </div>
          <p className="text-2xl font-medium text-text-dark max-md:text-[20px] text-center max-md:font-semibold">
            Order #123RGR231567Y <br className="md:hidden" /> Confirmed
          </p>
          <Link href={`/account`} className="w-full">
            <Button className="px-8 py-3.75 w-full h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-[#FF7A18] rounded-lg cursor-pointer capitalize">
              {`track order`}
            </Button>
          </Link>

          <Link href={``}>
            <Button className="px-8 py-3.75 w-full h-13.5 bg-[#F3F4F6] text-[#9da3a1] font-semibold text-base hover:bg-soft-gray hover:text-[#FF7A18] rounded-lg cursor-pointer capitalize">
              {`generate reciepts`}
            </Button>
          </Link>
          <p className="text-primary-blue text-base cursor-pointer">
            Need help with your order?
          </p>
        </div>
      )}
    </section>
  );
};

export default page;
