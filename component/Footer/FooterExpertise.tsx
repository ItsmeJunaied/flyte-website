import Link from "next/link";
import React from "react";

type Items = {
  name: string;
  path: string;
};

type Subsections = {
  name: string;
  items: Items[];
};

type Expertise = {
  sectionName: string;
  subsections: Subsections[];
};

const FooterExpertise: React.FC<{ expertise: Expertise }> = ({ expertise }) => {
  const { sectionName, subsections } = expertise || {};
  return (
    <div className="w-full">
      <h6 className="footer-title text-[#0FF] mb-8 text-sm">{sectionName}</h6>
      <div className="-mt-3 lg:mt-0 w-full flex flex-col lg:flex-row gap-6">
        {subsections?.map((subsection, index) => (
          <div key={index} className="w-full lg:w-1/4 flex flex-col gap-2 lg:gap-5">
            <h6 className="text-[#F5F5F5] font-bold text-base">{subsection?.name}</h6>
            <ul className="list-none flex flex-col gap-2 lg:gap-3 max-h-[276px] overflow-hidden">
              {subsection?.items.map((item, subIndex) => (
                <li key={subIndex}>
                  <Link href={item?.path} className="text-[#eaeaea] text-sm link link-hover">
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterExpertise;
