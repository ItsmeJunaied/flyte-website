import React from "react";
// import { techData } from "../../api/Dummy";

const WhyChoose = () => {
  return (
    <div className="container mt-10 lg:mt-20 mb-20">
      <h2 className="text-[#060b13] text-xl lg:text-3xl font-semibold mb-3 lg:mb-6">
        Why Choose Our Frontend Developers?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-3 lg:p-6 w-full bg-gray-200 rounded-xl flex flex-col gap-4">
          <i className={`text-xl lg:text-3xl text-[#5856d6] fa-solid fa-rocket`}></i>
          <h2 className="text-gray-800 text-xl font-semibold">Expertise in Modern Technologies</h2>
          <p className="text-gray-600 text-sm h-10 line-clamp-2">
            Proficient in HTML, CSS, JavaScript, React, Angular, Vue.js, and more.
          </p>
        </div>
        <div className="p-3 lg:p-6 w-full bg-gray-200 rounded-xl flex flex-col gap-4">
          <i className={`text-xl lg:text-3xl text-[#5856d6] fa-solid fa-rocket`}></i>
          <h2 className="text-gray-800 text-xl font-semibold">Expertise in Modern Technologies</h2>
          <p className="text-gray-600 text-sm h-10 line-clamp-2">
            Proficient in HTML, CSS, JavaScript, React, Angular, Vue.js, and more.
          </p>
        </div>
        <div className="p-3 lg:p-6 w-full bg-gray-200 rounded-xl flex flex-col gap-4">
          <i className={`text-xl lg:text-3xl text-[#5856d6] fa-solid fa-lock`}></i>
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
