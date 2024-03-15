import { Search, ShoppingCart } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Header() {
  return (
    <>
      <nav className=" h-[100px] w-full">
        <div className=" container mx-auto flex h-9 justify-end ">
          <div className="flex items-center justify-between gap-5  text-[12px] font-normal leading-[14.52px] text-neutral-600">
            <p>Help</p>
            <p>Orders & Returns</p>
            <p>Hi, John</p>
          </div>
        </div>
        <div className="container mx-auto flex h-16 items-center justify-between">
          <h2 className=" text-[32px] font-bold leading-[38.73px] ">
            ECOMMERCE
          </h2>
          <div className="-ml-28 flex justify-between  gap-8 text-base font-semibold leading-[19.36px]">
            <p>Categories</p>
            <p>Sale</p>
            <p>Clearance</p>
            <p>New stock</p>
            <p>Trending</p>
          </div>
          <div className="flex items-center justify-between gap-5">
            <Search />
            <ShoppingCart />
          </div>
        </div>
      </nav>
      <div className="flex h-9 items-center justify-center gap-5  bg-[#F4F4F4]">
        <ChevronLeft />
        <p className="  text-sm font-medium leading-[16.94px]">
          Get 10% off on business sign up
        </p>
        <ChevronRight />
      </div>
    </>
  );
}
