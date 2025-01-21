import React from "react";
import { brandData } from "../../api/Dummy";

const TopBrands = () => {
  const row1 = brandData.brands.slice(0, 6);
  const row2 = brandData.brands.slice(6, 12);
  const row3 = brandData.brands.slice(12, 21);
  return (
    <div className="container mb-10 md:mb-16">
      <h2 className="md:w-[454px] text-center text-lg md:text-2xl font-bold mx-auto mb-5">{brandData?.title}</h2>
      <div className="flex md:justify-center flex-wrap gap-5 md:gap-14 mb-4 md:mb-8">
        {row1.map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="w-fit h-[30px] lg:h-[48px] object-cover mt-5"
          />
        ))}
      </div>

      <div className="flex md:justify-center flex-wrap gap-5 md:gap-14 mb-4 md:mb-8">
        {row2.map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="w-fit h-[30px] lg:h-[48px] object-cover mt-5"
          />
        ))}
      </div>

      <div className="flex md:justify-center flex-wrap gap-5 md:gap-14 mb-4 md:mb-8">
        {row3.map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="w-fit h-[30px] lg:h-[48px] object-cover mt-5"
          />
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
