import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";
import Link from "next/link";

const ProductIntegrations = () => {
  return (
    <div className="container py-4 lg:py-8 space-y-6">
      <div className="block w-fit mx-auto text-center mb-3 lg:mb-6">
        <Subtitle Subtitle="Our Primary Integrations" />
        <Title title="Make productivity easier " width="full" />
        <h2 className="text-xl lg:text-3xl font-semibold">
          with <span className="text-[#6E51E0]">10+ Integrations</span>
        </h2>
      </div>

      {/* integrations  */}
      <div className="w-fit mx-auto">
        <img src="/images/product-integrations.png" alt="product-integrations" draggable="false" />
      </div>
      <p className="w-[600px] mx-auto text-center  text-[#353d4f]">
        Gain a competitive edge with our attendance and rostering software integrations, streamlining
        workforce management, enhancing productivity, and ensuring seamless scheduling while reducing
        administrative effort.
      </p>
      <Link
        href=""
        className="px-3 lg:px-6 py-2 lg:py-3 bg-[#5856d6] rounded-[99px] text-white text-base font-bold capitalize w-fit mx-auto block my-8"
      >
        See Integrations <i className="fa-solid fa-angle-right text-sm lg:text-base pl-2"></i>
      </Link>
    </div>
  );
};

export default ProductIntegrations;
