import React from "react";
import Title from "../Common/Title";

// types.ts
type TechItem = {
  name: string;
  image: string;
};

type TechCategory = {
  title: string;
  description: string;
  technologies: TechItem[];
};

type TechData = {
  frontend: TechCategory;
  backend: TechCategory;
  mobileDevelopment: TechCategory;
  qualityAssurance: TechCategory;
  devOps: TechCategory;
  aiML: TechCategory;
};

interface OperationsSectionsProps {
  techData: TechData;
}

const OperationsSections: React.FC<OperationsSectionsProps> = ({
  techData,
}) => {
  const headerTitle: string =
    "Innovative technology that transforms";

  // Section titles
  const sections = [
    { key: "frontend" },
    { key: "backend" },
    { key: "mobileDevelopment" },
    { key: "qualityAssurance" },
    { key: "devOps" },
    { key: "aiML" },
  ];

  return (
    <div
      className="py-[40px]"
      style={{
        backgroundImage: "url('/images/operationsBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className=" container mx-auto">
        <Title title={headerTitle} />
      </div>

      <div className="container mx-auto flex flex-wrap gap-5 py-10 px-5 lg:px-0 justify-center">
        {sections.map((section) => {
          const category = techData[section.key as keyof TechData]; 

          return (
            <div
              key={section.key}
              className=" w-[400px] p-[24px] bg-white shadow-[0px_0px_10px_10px_rgba(235,235,235,0.25)] flex-col justify-start items-start gap-4 inline-flex overflow-hidden"
            >
              <div className="text-black text-base font-bold">
                {category.title} {/* Use category.title here */}
              </div>
              <div className="self-stretch text-[#9c9c9c] text-xs font-normal">
                {category.description}
              </div>

              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="grid grid-cols-3 gap-6">
                  {category.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="w-fit px-2 py-1 rounded-[15px] border border-[#e9e9e9] justify-start items-center gap-1.5 flex"
                    >
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-3 h-3"
                      />
                      <div className="text-center text-[#5e5e5e] text-[10px] font-medium">
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-[42px] justify-center items- gap-2.5 inline-flex overflow-hidden">
        <button className="text-white bg-[#5856d6] rounded-md px-8 py-3 text-sm font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default OperationsSections;
