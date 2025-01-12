import React from "react";
import CustomCheckBox from "../Common/CustomCheckBox";

const ServicesStep = () => {
  return (
    <div>
      <p className="text-[#4a4a4a] text-center text-base font-semibold mb-10">
        Choose the specific services you need for your project.
      </p>
      <div className="space-y-4">
        <CustomCheckBox id="frontend" registerName="frontend" label="Frontend Development" />
        <CustomCheckBox id="backend" registerName="backend" label="Backend Development" />
        <CustomCheckBox id="quality-assurance" registerName="qualityAssurance" label="Quality Assurance" />
        <CustomCheckBox id="project-management" registerName="projectManagement" label="Project Management" />
        <CustomCheckBox id="mobile-application" registerName="mobileApplication" label="Mobile Application" />
        <CustomCheckBox id="devOps" registerName="devOps" label="DevOps" />
        <CustomCheckBox id="ai-and-ml" registerName="AI&ML" label="AI & ML" />
      </div>
    </div>
  );
};

export default ServicesStep;
