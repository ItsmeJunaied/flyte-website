/* eslint-disable @next/next/no-img-element */
import React from "react";
import Subtitle from "../Common/Subtitle";
import Title from "../Common/Title";

type CaseStudy = {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
};

type CaseStudyProps = {
  caseStudyData: CaseStudy[];
};

const CaseStudiesCards: React.FC<CaseStudyProps> = ({ caseStudyData }) => {
  const subtitle: string = "Explore Our Success Stories";
  const title: string = "Driving Innovation with Real-World Solutions";

  // Function to generate random color for tags
  const getFixedColor = (index: number) => {
    const colors = ["bg-red-300", "bg-blue-300", "bg-green-300"];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-whiterounded-t-[60px] py-10 px-10 lg:px-0">
      <div className="container px-5 lg:px-[80px]">
        <div className=" flex flex-col justify-center items-center gap-3 w-full">
          <Subtitle Subtitle={subtitle} />
          <Title width=" w-full " title={title} fontSize="text-3xl" fontColor="text-black" />
        </div>

        <div className="py-20 ">
          {/* Loop through caseStudyData to create each row of case study */}
          <div className="flex flex-col gap-10 ">
            {caseStudyData.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className={`flex ${
                  caseStudy.id % 2 === 1
                    ? " flex-col lg:flex-row "
                    : " flex-col-reverse lg:flex-row-reverse"
                } gap-10 justify-between`}
              >
                {/* Left Card (Image + Title + Tags + Description) */}
                <div
                  className="flex flex-col gap-2"
                  data-aos={
                    caseStudy.id % 2 === 1 ? "fade-up-left" : "fade-up-right"
                  }
                >
                  <div className="overflow-hidden">
                    <img
                      className="w-[600px] h-[500px] object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 hover:transform-origin-center"
                      src={caseStudy.image}
                      alt={caseStudy.title}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="pt-2">
                      <h1 className="text-3xl font-semibold text-black">
                        {caseStudy.title}
                      </h1>
                    </div>
                  </div>
                  <p className="text-lg font-light text-gray-400">
                    {caseStudy.description}
                  </p>
                  <div className="flex flex-row gap-3 ">
                    {caseStudy.tags.map((tag, index) => (
                      <div
                        key={index}
                        className={`flex justify-center items-center text-sm px-2 rounded-3xl text-white ${getFixedColor(
                          index
                        )}`}
                      >
                        <h1 className=" text-xs">{tag}</h1>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Card (Second Card with Zoom Effect) */}
                <div
                  className="flex flex-col gap-2 mt-32"
                  data-aos={
                    caseStudy.id % 2 === 1 ? "fade-up-right" : "fade-up-left"
                  }
                >
                  <div className="overflow-hidden">
                    <img
                      className="w-[600px] h-[500px] object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 hover:transform-origin-center"
                      src={caseStudy.image}
                      alt={caseStudy.title}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="pt-2">
                      <h1 className="text-3xl font-semibold text-black">
                        {caseStudy.title}
                      </h1>
                    </div>
                  </div>
                  <p className="text-lg font-light text-gray-400">
                    {caseStudy.description}
                  </p>
                  <div className="flex flex-row gap-3 ">
                    {caseStudy.tags.map((tag, index) => (
                      <div
                        key={index}
                        className={`flex justify-center items-center text-sm px-2 rounded-3xl text-white ${getFixedColor(
                          index
                        )}`}
                      >
                        <h1 className=" text-xs">{tag}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesCards;
