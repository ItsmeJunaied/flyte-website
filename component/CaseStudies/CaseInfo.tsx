import React from "react";

type CaseProps = {
  id: number;
  icon: string;
  label: string;
  value: string;
};

const CaseInfo: React.FC<{ data: CaseProps[] }> = ({ data }) => {
  return (
    <div className=" ">
      <div className="container px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 bg-[#f4f2f0]">
        {data?.map((item, index) => (
          <div key={index} className="w-[240px flex flex-col justify-center items-center gap-4">
            <i className={`text-2xl text-[#5856d6] fa-solid ${item?.icon}`}></i>
            <h2 className="text-xl font-bold">{item?.label}</h2>
            <p className="text-black/70 text-sm">{item?.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseInfo;
