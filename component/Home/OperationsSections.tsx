import React from "react";
import Title from "../Common/Title";
import Subtitle from "../Common/Subtitle";
import Link from "next/link";

// types.ts
type TechItem = {
  name: string;
  image: string;
};

type TechCategory = {
  title: string;
  hireLinkName: string;
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

const OperationsSections: React.FC<OperationsSectionsProps> = ({ techData }) => {
  const headerTitle: string = "Innovative technology that transforms";

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
      className="py-[40px] "
      style={{
        backgroundImage: "url('/images/operationsBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className=" container">
        <div className="  " data-aos="fade-up">
          <Subtitle Subtitle="Our Technology" />
          <Title title={headerTitle} />
        </div>

        <div
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10  lg:px-0 justify-center "
          data-aos="fade-up"
        >
          {sections.map((section) => {
            const category = techData[section.key as keyof TechData];

            return (
              <Link href={`/hire/${category?.hireLinkName}`}
                key={section.key}
                className=" h-auto p-[24px] bg-white hover:bg-[#85d4f4] group transition duration-500 shadow-[0px_0px_10px_10px_rgba(235,235,235,0.25)] flex-col justify-start items-stretch gap-4 inline-flex overflow-hidden"
              >
                <div className="text-black text-base font-bold">
                  {category.title} {/* Use category.title here */}
                </div>
                <div className="self-stretch text-[#9c9c9c] group-hover:text-black transition duration-500 text-xs font-normal">{category.description}</div>

                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <div className="grid grid-cols-3 gap-6">
                    {category.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="w-fit px-2 py-1 rounded-[15px] border border-[#e9e9e9] justify-start items-center gap-1.5 flex"
                      >
                        <img src={tech.image} alt={tech.name} className="w-3 h-3" />
                        <div className="text-center text-[#5e5e5e] text-[10px] font-medium">{tech.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div
          className="w-full h-[42px] justify-center items- gap-2.5 inline-flex overflow-hidden "
          data-aos="fade-up"
        >
          <Link href="/hire" className="text-white bgGradientNevyBlue rounded-md px-8 py-3 text-sm font-semibold">
            Learn More Technology
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OperationsSections;
