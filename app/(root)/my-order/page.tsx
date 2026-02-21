import CartCard from "@/components/cards/CartCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyOrder = () => {
  return (
    <section className="min-h-screen px-4 py-8" id="home">
      <div className="container mx-auto bg-white space-y-2 rounded-md px-5 py-6">
        <h2 className="font-bold text-3xl text-primary">Your Cart</h2>
        <div className="w-full space-y-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <CartCard key={i} />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link
            href={`/explore`}
            className="flex gap-4 items-center justify-center text-primary-blue"
          >
            <span className="text-3xl">+</span>
            <p className="text-[16px] leading-6">
              Add more items from Chuks Kitchen
            </p>
          </Link>

          <Link href={"/my-order/summary"}>
            <Button className=" w-53.75 h-13.5 bg-[#FF7A18] text-white font-semibold text-base hover:bg-[#ff7a44] border-[#FF7A18] border-2 rounded-lg cursor-pointer">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyOrder;

//Added proceed to checkout button to link to the account page for order summary.
