import Link from "next/link";
import React from "react";

type Features = {
  id: number;
  name: string;
  details: string;
};

type CardProps = {
  name: string;
  description: string;
  title: string;
  features: Features[];
};

const StepCard: React.FC<{ data: CardProps }> = ({ data }) => {
  const { name, description, title, features } = data || {};
  return (
    <div className="bg-white py-5 lg:py-10 mt-10 lg:mt-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <h2 className="text-[#181a2a] text-xl lg:text-3xl font-semibold mb-5 lg:mb-10 w-full lg:w-2/3">
            {name}
          </h2>
          <p className="text-[#12094a]">{description}</p>
        </div>
        <div>
          <h2 className="text-[#181a2a] text-xl lg:text-2xl font-semibold mb-4 lg:mb-8">{title}</h2>

          <div className="space-y-6">
            {features?.map((feature, index) => (
              <div key={index}>
                <div className="flex gap-3.5 mb-2.5">
                  <span className="w-6 h-6 bg-[#5856d6] rounded-full flex justify-center items-center text-white text-sm font-semibold">
                    {feature?.id}
                  </span>
                  <h4 className="text-center text-[#3b3c4e] text-lg font-bold font-['Open Sans']">
                    {feature?.name}
                  </h4>
                </div>
                <div className="flex gap-3.5">
                  <span className="w-0.5 h-auto mx-3 bg-[#0e0d0d]" />
                  <p className="opacity-70 text-[#3b3c4e]">{feature?.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link className="px-8 py-3 mt-6 ml-5 bg-[#5856d6] hover:bg-[#4a46bc] rounded-md text-white w-fit lg:mx-auto block" href="">Start Hiring Now</Link>
    </div>
  );
};

export default StepCard;
