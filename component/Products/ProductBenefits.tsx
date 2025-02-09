import React from "react";
import { ProductHeaderProps } from "./ProductHeader";
import { ProductCardsData } from "@/api/Dummy";
import Link from "next/link";

const ProductBenefits: React.FC<ProductHeaderProps> = ({ params }) => {
  const product = ProductCardsData.find((item) => item.productLinkName === params);

  if (!product) {
    return <p className="text-center text-gray-600">Product details not found.</p>;
  }
  return (
    <div className="container">
      {product?.productBenefits?.map((benefit, index) => (
        <div
          key={index}
          className={`lg:px-16 py-4 lg:py-8 flex flex-col lg:flex-row gap-5 lg:gap-10 ${
            index % 2 === 0 && "lg:flex-row-reverse"
          }`}
        >
          <div className="lg:w-1/2 space-y-4 lg:space-y-8 max-h-[320px] overflow-hidden">
            <h2 className="text-gray-800 text-xl lg:text-3xl font-semibold">{benefit?.title}</h2>
            <p className="text-gray-600 text-sm">{benefit?.description}</p>
            {benefit?.points?.map((point, pointIdx) => (
              <div key={pointIdx} className="flex items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.3333 21.373C17.3038 21.373 21.3333 17.3436 21.3333 12.373C21.3333 7.40248 17.3038 3.37305 12.3333 3.37305C7.36269 3.37305 3.33325 7.40248 3.33325 12.373C3.33325 17.3436 7.36269 21.373 12.3333 21.373Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path d="M8.33325 12.373L11.3333 15.373L16.3333 9.37305" stroke="black" strokeWidth="2" />
                </svg>
                <span className="text-[#3b3c4a] text-sm ">{point}</span>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2">
            <img className="w-full lg:h-[320px] object-cover rounded-xl" src={benefit?.image} alt="" />
          </div>
        </div>
      ))}

      <Link
        href=""
        className="px-3 lg:px-6 py-2 lg:py-3 bg-black text-white text-base font-bold capitalize w-fit mx-auto block my-8"
      >
        Try Demo <i className="fa-solid fa-angle-right text-sm lg:text-base pl-2"></i>
      </Link>
    </div>
  );
};

export default ProductBenefits;
