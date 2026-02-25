import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const OnBoarding = () => {
  const features = [
    { detail: "Freshly Prepared", icon: "/icons/cutleries.png" },
    { detail: "Support Local Business", icon: "/icons/cutleries.png" },
    { detail: "Fast & Reliable Delivery", icon: "/icons/truck.png" },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="md:hidden w-full h-42 relative overflow-hidden">
        <Image
          src={`/images/mobile-banner2.png`}
          // width={100}
          fill
          // height={37}
          alt="Mobile banner image"
          className="object-cover"
        />
      </div>
      <div className="min-h-screen mx-auto relative flex justify-between max-md:justify-around md:py-8 flex-col max-xl:p-6 md:max-w-144.25">
        {/* Onboarding heading */}
        <div className="flex items-center justify-between max-md:justify-center transition duration-500 ease-in-out">
          <Image
            src={"/images/ChuksKitchen.png"}
            alt="Chuks Kitchen Logo"
            height={41}
            width={183}
            className="hover:scale-y-105 w-auto h-auto"
          />

          <Link href={"/sign-in"} className="max-md:hidden">
            <Button
              variant={"outline"}
              className="px-8 py-3 w-40 h-13.5 border-2 border-primary-blue text-primary-blue hover:text-white hover:bg-primary-blue hover:bg-none hover:scale-95 cursor-pointer text-base font-semibold"
            >
              Sign In
            </Button>
          </Link>
        </div>

        {/* Component details */}
        <div className="space-y-9 text-details">
          <h1 className="text-[32px] leading-10.5 font-bold">
            Your Authentic Taste of Nigeria
          </h1>
          <p className="">
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>

          {/* Features of product */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <span
                className="flex items-center justify-start gap-4 max-md:bg-soft-gray max-md:p-2 rounded-md "
                key={idx}
              >
                <img
                  src={item.icon}
                  alt={item.detail}
                  className=""
                  width={44}
                  height={44}
                />
                <h3 className="text-base text-black max-sm:tracking-widest">
                  {item.detail}
                </h3>
              </span>
            ))}
          </div>

          {/* CTA buttons*/}
          <div className="flex flex-col gap-2 md:gap-6">
            <Link href={`/sign-in`}>
              <Button className="py-7.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-white border-[#FF7A18] border-2 hover:text-lg hover:text-[#FF7A18] rounded-xl max-md:py-6 w-full cursor-pointer">
                Start Your Order
              </Button>
            </Link>

            <Link href={`#`}>
              <Button className="py-7.5 bg-white text-[#1E88E5] font-semibold text-base hover:-translate-y-1.5 border-2 border-[#1E88E5] hover:bg-white rounded-xl max-md:py-6 w-full cursor-pointer">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
        {/* Onboarding footer */}
        <div className="flex items-center justify-center gap-3 border-t border-soft-gray text-sm pt-2">
          <p className="text-details">© 2024 Chuks Kitchen.</p>
          <span className="text-primary-blue">Privacy Policy</span>
          <span className="text-primary-blue">Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
