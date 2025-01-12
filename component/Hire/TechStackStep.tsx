import React from "react";
import CustomCheckBox from "../Common/CustomCheckBox";

const TechStackStep = () => {
  return (
    <div>
      <p className="text-[#4a4a4a] text-center text-base font-semibold mb-10">
        Select the technologies and tools your project requires.
      </p>
      {/* Frontend Development  */}
      <div className="bg-white p-5 rounded-lg border border-[#efefef] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 md:w-[800px] mb-2">
        <p className="col-span-1 text-[#373737] text-sm font-semibold text-center">Frontend Development</p>
        <div className="space-y-2 col-span-1 md:col-span-2 flex flex-col items-start">
          <CustomCheckBox id="html-css" registerName="htmlCss" label="HTML & CSS" />
          <CustomCheckBox id="react" registerName="react" label="React" />
          <CustomCheckBox id="angular" registerName="angular" label="Angular" />
          <CustomCheckBox id="vuejs" registerName="vuejs" label="Vue.js" />
          <CustomCheckBox id="nextjs" registerName="nextjs" label="Next.js" />
          <CustomCheckBox id="frontend-others" registerName="frontendOthers" label="Others" />
        </div>
      </div>

      {/* Backend Development */}
      <div className="bg-white p-5 rounded-lg border border-[#efefef] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 md:w-[800px] mb-2">
        <p className="col-span-1 text-[#373737] text-sm font-semibold text-center">Backend Development</p>
        <div className="space-y-2 col-span-1 md:col-span-2 flex flex-col items-start">
          <CustomCheckBox id="nodejs" registerName="nodejs" label="Node.js" />
          <CustomCheckBox id="java-spring" registerName="javaSpring" label="Java (Spring)" />
          <CustomCheckBox id="php-laravel" registerName="phpLaravel" label="PHP (Laravel)" />
          <CustomCheckBox id="dot-net" registerName="dotNet" label=".NET" />
          <CustomCheckBox id="python" registerName="python" label="Python" />
          <CustomCheckBox id="go" registerName="go" label="GO" />
          <CustomCheckBox id="backend-others" registerName="backendOthers" label="Others" />
        </div>
      </div>

      {/* Mobile Application */}
      <div className="bg-white p-5 rounded-lg border border-[#efefef] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 md:w-[800px] mb-2">
        <p className="col-span-1 text-[#373737] text-sm font-semibold text-center">Mobile Application</p>
        <div className="space-y-2 col-span-1 md:col-span-2 flex flex-col items-start">
          <CustomCheckBox id="flutter" registerName="flutter" label="Flutter" />
          <CustomCheckBox id="react-native" registerName="reactNative" label="React Native" />
          <CustomCheckBox id="mobile-app-others" registerName="mobileAppOthers" label="Others" />
        </div>
      </div>
    </div>
  );
};

export default TechStackStep;
