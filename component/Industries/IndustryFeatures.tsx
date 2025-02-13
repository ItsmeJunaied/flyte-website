import React from "react";

const industryFeatures = {
  title: "Why Choose Us for Fintech Solutions?",
  description:
    "Stay ahead in fintech with secure, scalable solutions. From compliance to AI and blockchain, we drive innovation and growth. Partner with us to transform financial services.",
  features: [
    {
      id: 1,
      icon: "fa-chart-column",
      bgColor: "#EFF6F3",
      name: "Industry Expertise",
      description: "Deep understanding of financial regulations and technologies.",
    },
    {
      id: 2,
      icon: "fa-lock",
      bgColor: "#e6f3e5",
      name: "Secure Solutions",
      description: "Robust security measures to protect sensitive financial data.",
    },
    {
      id: 3,
      icon: "fa-arrow-trend-up",
      bgColor: "#fdf2c8",
      name: "Scalable Platforms",
      description: "Solutions designed to grow with your business.",
    },
    {
      id: 4,
      icon: "fa-palette",
      bgColor: "#ebeff3",
      name: "Customer-Centric Design",
      description: "Focus on delivering seamless user experiences.",
    },
  ],
};

const IndustryFeatures = () => {
  return (
    <div className="bg-white">
      <div className="container lg:px-20 py-5 lg:py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="col-span-1">
          <h2 className="text-[#121212] text-xl lg:text-[32px] font-semibold leading-10">
            {industryFeatures?.title}
          </h2>
          <div className="w-20 h-[3px] relative bg-[#5856D6] my-3" />
          <p className="text-[#2d2e2e]">{industryFeatures?.description}</p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
          {industryFeatures?.features?.map((feature, index) => (
            <div
              key={index}
              className="h-[190px] flex-col justify-center items-center lg:justify-start lg:items-start gap-4 lg:gap-8 inline-flex"
            >
              <div className="relative w-[90px] h-[76px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="76"
                  viewBox="0 0 90 76"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.049542 43.6351C-1.04201 30.848 16.1633 25.4136 26.0494 17.2041C34.4609 10.2191 41.6132 0.666969 52.5392 0.0472946C63.8936 -0.59668 74.822 5.40157 82.2221 14.0182C89.1393 22.0727 90.1988 33.0305 89.9727 43.6351C89.7528 53.9473 88.9658 65.4617 80.9854 72.018C73.3493 78.2915 62.3598 75.5688 52.5392 74.3888C44.3198 73.4013 37.3467 70.0998 30.2077 65.917C18.9943 59.3471 1.15311 56.563 0.049542 43.6351Z"
                    fill={feature?.bgColor}
                  />
                </svg>

                <i className={`text-3xl absolute top-6 right-6 fa-solid ${feature?.icon}`}></i>
              </div>
              <div>
                <h4 className="text-[#3a4e39] text-center lg:text-start font-semibold mb-2 lg:mb-3">{feature?.name}</h4>
                <p className="text-[#2d2e2e] text-sm text-center lg:text-start w-[80%] mx-auto lg:mx-0">{feature?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryFeatures;
