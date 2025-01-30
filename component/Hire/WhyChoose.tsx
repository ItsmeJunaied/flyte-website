import React from "react";
// import { techData } from "../../api/Dummy";

const WhyChoose = () => {
  return (
    <div className="container mt-10 lg:mt-20 mb-20">
      <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">
        Why Choose Our Frontend Developers?
      </h2>
      <div className="grid grid-cols-3">
        <div className="p-3 lg:p-6 bg-gray-200 rounded-xl flex flex-col gap-4">
          <i className={`fa-solid text-xl lg:text-3xl fa-rocket`}></i>
          <h2 className="text-gray-800 text-xl font-semibold">Expertise in Modern Technologies</h2>
          <p className="text-gray-600 text-sm h-10 line-clamp-2">
            Proficient in HTML, CSS, JavaScript, React, Angular, Vue.js, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
