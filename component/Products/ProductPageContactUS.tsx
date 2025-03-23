import Link from "next/link";
import React from "react";

const ProductPageContactUS = () => {
  return (
    <div className="w-[400px] h-[424px] px-8 py-10 bg-[#31323c] rounded-xl flex-col justify-between items-start inline-flex">
      <div className="self-stretch text-[#f7f7f7] text-[32px] font-semibold font-['Noto Sans']">
        Explore Custom Product Solutions
      </div>
      <div className="w-20 h-[3px] relative bg-[#dda380]" />
      <div className="self-stretch text-[#d9d9d9] text-base font-normal font-['Noto Sans'] leading-[30px]">
        Have specific needs? Contact us, and we will provide solutions designed just for you.
      </div>
      <Link
        href="/contact-us"
        className="self-stretch px-8 py-3 border border-white hover:bg-white group transition duration-500 justify-center items-start gap-2.5 inline-flex overflow-hidden"
      >
        <div className="text-white group-hover:text-black transition duration-500 text-sm font-semibold font-['Noto Sans']">Contact Us</div>
      </Link>
    </div>
  );
};

export default ProductPageContactUS;
