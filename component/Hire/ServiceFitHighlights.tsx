import React from "react";
import { serviceHighlightsData } from "../../api/Dummy";

type ServiceHighlight = {
  id: number;
  category: string;
  title: string;
  description: string;
  features: string[];
  backgroundImage: string;
};

const ServiceFitHighlights: React.FC = () => {
  return (
    <div className="px-5 lg:px-10 bg-[#FAFAFA] pb-10">
      <div className="container mx-auto">
        <h2 className="max-w-[492px] text-center text-black text-base md:text-[32px] font-semibold font-['Open Sans'] mx-auto py-5 md:py-10 md:leading-10">
          Ideal Scenarios for Dedicated Development Team Model
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceHighlightsData?.map((service: ServiceHighlight, index: number) => (
            <div
              key={index}
              className="p-5 w-full md:max-w-80 h-[350px] md:h-[400px] bg-[#002347]/80 rounded-2xl"
              style={{
                backgroundImage: "url('https://i.ibb.co.com/DLFqKr5/Rectangle-3844.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="grid grid-rows-3 h-full">
                <span className="px-2 py-1.5 bg-white/20 text-xs rounded-[3.18px] w-[90px] h-7 mx-auto text-center">
                  {service?.category}
                </span>

                <h4 className="text-white text-lg font-semibold font-['DM Sans']">{service?.title}</h4>

                <p className="text-[#d5d5d5e6] text-sm font-normal font-['DM Sans'] leading-tight tracking-tight">
                  {service?.description}
                </p>

                <div className="h-[116px] p-4 bg-white rounded-[15px] border-b-2 flex-col justify-start items-start gap-1.5 inline-flex">
                  {service?.features.map((feature, index) => (
                    <div key={index} className="self-stretch justify-end items-center gap-2.5 inline-flex">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M14 2.89648C11.8783 2.89648 9.84344 3.73934 8.34315 5.23963C6.84285 6.73992 6 8.77475 6 10.8965C6 13.0182 6.84285 15.053 8.34315 16.5533C9.84344 18.0536 11.8783 18.8965 14 18.8965C16.1217 18.8965 18.1566 18.0536 19.6569 16.5533C21.1571 15.053 22 13.0182 22 10.8965C22 8.77475 21.1571 6.73992 19.6569 5.23963C18.1566 3.73934 16.1217 2.89648 14 2.89648ZM4.93 6.71648C3.08 8.23648 2 10.5065 2 12.8965C2 15.0182 2.84285 17.053 4.34315 18.5533C5.84344 20.0536 7.87827 20.8965 10 20.8965C10.64 20.8965 11.27 20.8165 11.88 20.6665C10.12 20.2765 8.5 19.3965 7.17 18.1865C5.22 17.1465 4 15.1065 4 12.8965C4 12.5965 4.03 12.3065 4.07 12.0065C4.03 11.6365 4 11.2665 4 10.8965C4 9.45648 4.32 8.02648 4.93 6.71648ZM18.09 6.97648L19.5 8.39648L13 14.8965L9.21 11.1065L10.63 9.68648L13 12.0665"
                            fill="#161616"
                          />
                        </svg>
                      </span>
                      <div className="grow shrink basis-0 text-[#161616] text-xs font-medium font-['DM Sans'] leading-tight tracking-tight">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFitHighlights;
