import ApplicationForm from "@/component/Hire/ApplicationForm";
import React from "react";

const page = () => {
  return (
    <div className="bg-white py-0 md:py-10 lg:mt-[100px] border-t">
      <div className="container py-5 bg-[#F9F9F9] lg:max-w-[1040px] rounded-[15px] shadow-md flex flex-col items-center">
        <div className="md:text-center">
          <h6 className="text-black text-xl font-bold mb-2 md:mb-4">Hire top developers quickly and easily</h6>
          <p className="text-neutral-500 text-sm font-normal mb-5 md:mb-10">
            Build your dream team with skilled developers, ready to meet your needs.
          </p>
        </div>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default page;
