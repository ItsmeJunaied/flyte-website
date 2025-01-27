import React from "react";
import Marquee from "react-fast-marquee";

type Brand = {
  src: string;
  alt: string;
};

type BrandData = {
  title: string;
  brands: Brand[];
};

const Brands: React.FC<BrandData> = ({ brands }) => {
  const half = Math.ceil(brands.length / 2);
  const firstHalf = brands.slice(0, half);
  const secondHalf = brands.slice(half);

  return (
    <div className="bg-[#F4F5F8] pt-4 pb-6 w-full">
      <div className="hidden lg:block">
        {/* Marquee for the first half of the brands */}
        <Marquee direction="right" speed={30} loop={0}>
          <div className="flex justify-center items-center gap-[56px]">
            {firstHalf.map((brand, index) => (
              <img
                key={index}
                src={brand.src}
                alt={brand.alt}
                className="w-fit h-[30px] lg:h-[48px] object-cover mt-5"
              />
            ))}
            {/* Gap between first and repeat */}
            <div className="w-1" />
            {/* Repeat the first half of the brands at the end */}
            {firstHalf.map((brand, index) => (
              <img
                key={`repeat-${index}`}
                src={brand.src}
                alt={brand.alt}
                className="w-fit h-[30px] lg:h-[48px] object-cover mt-5"
              />
            ))}
            <div className="w-1" />
          </div>
        </Marquee>
        {/* Marquee for the second half of the brands */}
        <Marquee direction="left" speed={30} loop={0}>
          <div className="flex justify-center items-center gap-[56px]">
            {secondHalf.map((brand, index) => (
              <img
                key={index}
                src={brand.src}
                alt={brand.alt}
                className="w-fit h-[30px] lg:h-[48px] object-cover mt-5"
              />
            ))}
            <div className="w-1" />
            {/* Repeat the second half of the brands at the end */}
            {secondHalf.map((brand, index) => (
              <img
                key={`repeat-${index}`}
                src={brand.src}
                alt={brand.alt}
                className="w-fit h-[30px] lg:h-[48px] object-cover mt-5"
              />
            ))}
          </div>
          <div className="w-1" />
        </Marquee>
      </div>

      <div className="lg:hidden">
        <div className="flex justify-center flex-wrap gap-5">
          {brands?.map((brand, index) => (
            <img
              key={index}
              src={brand?.src}
              alt={brand?.alt}
              className="w-fit h-[30px] object-cover mt-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
