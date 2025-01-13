import React from "react";

const ProductPageContactUS = () => {
  return (
    <div className="w-[400px] h-[424px] px-8 py-10 bg-[#31323c] rounded-xl flex-col justify-between items-start inline-flex">
      <div className="self-stretch text-[#f7f7f7] text-[32px] font-semibold font-['Noto Sans']">
        Explore Custom Product Solutions
      </div>
      <div className="w-20 h-[3px] relative bg-[#dda380]" />
      <div className="self-stretch text-[#d9d9d9] text-base font-normal font-['Noto Sans'] leading-[30px]">
        Have specific needs? Contact us, and we'll provide solutions designed
        just for you.
      </div>
      <div className="self-stretch px-8 py-3 border border-white justify-center items-start gap-2.5 inline-flex overflow-hidden">
        <div className="text-white text-sm font-semibold font-['Noto Sans']">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default ProductPageContactUS;
