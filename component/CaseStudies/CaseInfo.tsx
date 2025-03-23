import React from "react";

type CaseProps = {
  location: string;
  category: { name: string };
  service: string;
  partnership: string;
};
// location, industries, service, partnership

const CaseInfo: React.FC<{ data: CaseProps }> = ({ data }) => {
  const { location, category, service, partnership } = data;
  return (
    <div className="bg-[#f4f2f0]">
      <div className="container md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-8">
        <div className="w-[240px flex flex-col justify-center items-center gap-4">
          <i className={`text-2xl text-[#5856d6] fa-solid fa-map-marker-alt`}></i>
          <h2 className="text-xl font-bold">Location</h2>
          <p className="text-black/70 text-sm">{location}</p>
        </div>

        <div className="w-[240px flex flex-col justify-center items-center gap-4">
          <i className={`text-2xl text-[#5856d6] fa-solid fa-industry`}></i>
          <h2 className="text-xl font-bold">Industry</h2>
          <p className="text-black/70 text-sm">{category?.name}</p>
        </div>

        <div className="w-[240px flex flex-col justify-center items-center gap-4">
          <i className={`text-2xl text-[#5856d6] fa-solid fa-globe`}></i>
          <h2 className="text-xl font-bold">Service</h2>
          <p className="text-black/70 text-sm">{service}</p>
        </div>

        <div className="w-[240px flex flex-col justify-center items-center gap-4">
          <i className={`text-2xl text-[#5856d6] fa-solid fa-handshake`}></i>
          <h2 className="text-xl font-bold">Partnership</h2>
          <p className="text-black/70 text-sm">{partnership}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseInfo;
