import React from "react";
import ListCard from "../Common/ListCard";
import Link from "next/link";

type Service = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  keywords: string[];
  serviceLinkName: string;
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { id, title, subTitle, description, keywords, serviceLinkName } = service || {};
  return (
    <div>
      <div
        className={` bg-white py-10 md:flex justify-center gap-10 lg:gap-36 mb-5 rounded-2xl space-y-5 md:space-y-0 px-5 lg:px-0 ${
          id % 2 === 0 && "flex-row-reverse"
        }`}
      >
        <div
          className={`md:w-[460px] md:h-[365px] flex flex-col items-center md:items-start ${
            id % 2 != 0 && "items-center md:items-end"
          } `}
        >
          <div className="w-40 md:w-60 h-[120px] md:h-[155px] bg-emerald-300 md:ml-32 -mb-12">
            <img src="https://i.ibb.co.com/BzrstK4/Image1.png" alt="" />
          </div>
          <div className="w-40 md:w-60 h-[120px] md:h-[155px] bg-emerald-500 mr-32">
            <img src="https://i.ibb.co.com/QdrF5BQ/Image2.png" alt="" />
          </div>
          <div className="w-40 md:w-60 h-[120px] md:h-[155px] bg-emerald-700 md:ml-32 -mt-12">
            <img src="https://i.ibb.co.com/7W1VRHX/Image3.png" alt="" />
          </div>
        </div>

        <div className="md:w-[460px] h-[365px] space-y-6">
          <h4 className="text-[#757575] text-sm uppercase tracking-wide">{subTitle}</h4>
          <h2 className="text-[#1b1717] text-xl font-bold uppercase tracking-wider">{title}</h2>
          <p className="text-[#6e6e6e] text-xs font-normal">{description}</p>
          <div>
            {keywords?.map((list, index) => (
              <div key={index}>
                <ListCard listInfo={list} />
              </div>
            ))}
          </div>

          <div>
            <Link
              href={`services/${serviceLinkName}`}
              className="h-[42px] px-8 py-3 bg-[#5856d6] hover:bg-[#3d3b98] rounded-md text-white text-sm font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
