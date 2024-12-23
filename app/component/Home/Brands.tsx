import React from "react";
import Title from "../Common/Title";

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
    <div className=" ">
      <div className=" ">
        <div className="w-full flex justify-center items-center  text-center text-black text-2xl font-semibold font-['DM Sans']  ">
          <Title title={headertitle} />
        </div>
      </div>

      <div className=" w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 content-center place-items-center gap-4 mt-10 px-16 lg:px-0 ">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-[56px]"
          >
            <img
              src={brand.src}
              alt={brand.alt}
              className="w-fit h-[30px] lg:h-[48px] object-cover mt-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
