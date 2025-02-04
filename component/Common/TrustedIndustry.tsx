import React from "react";

const trustedBrand = [
  "https://i.ibb.co.com/rKrd5Xnr/uber-svgrepo-com-1.png",
  "https://i.ibb.co.com/7xyC91dF/184260-1.png",
  "https://i.ibb.co.com/1GZB4Qnw/Frame-31.png",
  "https://i.ibb.co.com/F41pXtPH/walton.png",
  "https://i.ibb.co.com/Xx2yFwNp/257321-1.png",
  "https://i.ibb.co.com/d0N2H0D6/surface1.png",
  "https://i.ibb.co.com/k6WhJYmc/world-health-organization-logo-1.png",
  "https://i.ibb.co.com/WWZTz1HM/363996.png"
]

const TrustedIndustry = () => {
  return (
    <div>
      <div className="px-5 md:px-20 py-7 md:py-10 bg-black">
        <h1 className="text-center text-white text-xl md:text-2xl font-semibold mb-5 md:mb-12">Trusted by Industry Leaders</h1>
        <div className="flex flex-wrap lg:justify-center gap-4 md:gap-7">
          {trustedBrand?.map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`trusted brand image-${index}`}
              className="w-fit h-[30px] lg:h-[48px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedIndustry;
