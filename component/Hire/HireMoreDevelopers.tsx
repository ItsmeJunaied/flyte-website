import Link from "next/link";
import React from "react";

type Developer = {
  name: string;
  path: string;
};

type HireMoreDevelopersProps = {
  data: {
    exploreMoreDevelopers: Developer[];
  };
};

const HireMoreDevelopers: React.FC<HireMoreDevelopersProps> = ({ data }) => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="px-3 lg:px-8 py-5 lg:py-10 bg-[#31323c] rounded-xl flex flex-col gap-4 lg:gap-8">
          <h2 className="text-[#f7f7f7] text-xl lg:text-3xl font-semibold">
            Explore More Developer Roles
          </h2>
          <div className="w-20 h-[3px] relative bg-[#dda380]" />
          <p className="text-[#d9d9d9] text-base font-normal">
            Looking for a more specific role? Check out the options below:
          </p>
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
            {data?.exploreMoreDevelopers?.map((developer, index) => (
              <Link
                key={index}
                href={developer.path}
                className="text-white hover:text-[#5856d6] text-sm lg:text-base border-b border-white hover:border-[#5856d6]"
              >
                {developer.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMoreDevelopers;
