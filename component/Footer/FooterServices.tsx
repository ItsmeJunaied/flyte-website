// import Link from "next/link";
import React from "react";

// type Items = {
//   name: string;
//   path: string;
// };

// type Subsections = {
//   name: string;
//   items: Items[];
// };
type Subsections = {
  name: string;
  items: string[];
};

type Services = {
  sectionName: string;
  subsections: Subsections[];
};

const FooterServices: React.FC<{ services: Services }> = ({ services }) => {
  const { sectionName, subsections } = services || {};
  return (
    <div className="w-full mt-0 lg:mt-8">
      <h6 className="footer-title text-[#0FF] mb-8 text-sm">{sectionName}</h6>
      <div className=" w-full  flex flex-col lg:flex-row  gap-6">
        {subsections?.map((subsection, index) => (
          <div key={index} className=" lg:w-1/4 w-full  flex flex-col gap-5">
            <h6 className="text-[#F5F5F5] font-bold text-base">{subsection?.name}</h6>
            <ul className="list-none flex flex-col gap-3">
              {subsection?.items.map((item, subIndex) => (
                // <li key={subIndex}>
                //   <Link href={item?.path} className="text-[#EBEBEB] text-sm link link-hover">
                //     {item?.name}
                //   </Link>
                // </li>
                <li key={subIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterServices;
