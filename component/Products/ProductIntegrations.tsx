import React from "react";
import Subtitle from "../Common/Subtitle";
import Link from "next/link";
import { productData } from "./ProductOverview";

const ProductIntegrations: React.FC<{ product: productData }> = ({ product }) => {
  const {
    productivity_title,
    productivity_short_title,
    productivity_image,
    productivity_description,
    productivity_link,
  } = product || {};
  return (
    <div className="container lg:px-32 py-4 lg:py-8 space-y-6">
      <div className="block w-fit mx-auto text-center mb-3 lg:mb-6">
        <Subtitle Subtitle={productivity_title} />
        {/* <h2 className="text-xl lg:text-3xl font-semibold">
          with <span className="text-[#6E51E0]">10+ Integrations</span>
        </h2> */}
        <h2 className="text-xl lg:text-3xl font-semibold">{productivity_short_title}</h2>
      </div>

      {/* integrations  */}
      <div className="w-full mx-auto">
        <img className="w-full h-full lg:h-[400px] object-cover" src={productivity_image} alt={productivity_title} draggable="false" />
      </div>
      <p className="lg:w-[600px] lg:mx-auto lg:text-center  text-[#353d4f]">{productivity_description}</p>
      <Link
        href={productivity_link}
        target="_blank"
        className="px-3 lg:px-6 py-2 lg:py-3 bg-[#5856d6] rounded-[99px] text-white text-base font-bold capitalize w-fit mx-auto block my-8"
      >
        See Integrations <i className="fa-solid fa-angle-right text-sm lg:text-base pl-2"></i>
      </Link>
    </div>
  );
};

export default ProductIntegrations;
