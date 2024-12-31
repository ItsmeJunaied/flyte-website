import React from "react";
import Title from "../Common/Title";
import Marquee from "react-fast-marquee";
type Brand = {
  src: string;
  alt: string;
};

type BrandData = {
  title: string;
  brands: Brand[];
};

const Brands: React.FC<BrandData> = ({ title, brands }) => {
  const headertitle: string =
    "Trusted by top brands to deliver excellence every time";
  return (
    <div className="  bg-[#F4F5F8] pt-4 pb-6  w-full  ">
      <Marquee  direction="left" speed={30}>
        <div className="flex justify-center items-center gap-[56px]">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="w-fit h-[30px] lg:h-[35px] object-cover mt-5"
            />
          ))}
        </div>
      </Marquee>
    </div>
    // </div>
  );
};

export default Brands;
