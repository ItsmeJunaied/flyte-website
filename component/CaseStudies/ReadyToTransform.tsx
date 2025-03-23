import Link from "next/link";
import React from "react";

const ReadyToTransform = () => {
  return (
    <div className="w-full py-6 bg-[#14171d]">
      <div className="container flex flex-col justify-center items-center gap-4 lg:gap-8">
        <div>
          <h2 className="w-full lg:w-[454px] text-center mx-auto text-white text-2xl font-semibold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="w-full lg:w-[550px] text-center mx-auto text-[#f7f7f7] text-sm">
            Explore how our solutions can help you achieve similar success. Let’s turn your challenges into
            opportunities.
          </p>
        </div>
        <Link
          className="px-8 py-3 mt-6 ml-5 bgGradientNevyBlue rounded-md text-white w-fit lg:mx-auto block"
          href="/schedule-consultation"
        >
          Book A Consultation
        </Link>
      </div>
    </div>
  );
};

export default ReadyToTransform;
