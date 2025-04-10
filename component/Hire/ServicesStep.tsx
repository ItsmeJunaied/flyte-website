"use client";
import React from "react";
import CustomCheckBox from "../Common/CustomCheckBox";
import { useGetHireServicesQuery } from "@/redux/api/hireApi";
import ServiceStepSkeleton from "./ServiceStepSkeleton";

type Service = {
  id: string;
  name: string;
};

const ServicesStep = () => {
  const { data, isLoading } = useGetHireServicesQuery({});

  const services = data?.data || [];
  return (
    <div>
      <p className="text-[#4a4a4a] text-center text-base font-semibold mb-10">
        Choose the specific services you need for your project.
      </p>

      {isLoading ? (
        <ServiceStepSkeleton />
      ) : (
        <div className="space-y-4">
          {services.map((service: Service) => (
            <CustomCheckBox
              key={service.id}
              id={service.id}
              registerName={`service_${service.id}`}
              label={service.name}
            />
          ))}
          {/* <CustomCheckBox id="frontend" registerName="frontend" label="Frontend Development" />
        <CustomCheckBox id="backend" registerName="backend" label="Backend Development" />
        <CustomCheckBox id="quality-assurance" registerName="qualityAssurance" label="Quality Assurance" />
        <CustomCheckBox id="project-management" registerName="projectManagement" label="Project Management" />
        <CustomCheckBox id="mobile-application" registerName="mobileApplication" label="Mobile Application" />
        <CustomCheckBox id="devOps" registerName="devOps" label="DevOps" />
        <CustomCheckBox id="ai-and-ml" registerName="AI&ML" label="AI & ML" /> */}
        </div>
      )}
    </div>
  );
};

export default ServicesStep;
