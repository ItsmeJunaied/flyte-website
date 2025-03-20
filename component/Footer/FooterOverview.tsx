"use client";
import { useGetFooterQuery } from "@/redux/api/footerApi";
import React from "react";
import FooterExpertise from "./FooterExpertise";
import FooterServices from "./FooterServices";

const FooterOverview = () => {
  const { data: footerData, isLoading } = useGetFooterQuery({});

  if (isLoading) {
    return "loading...";
  }

  console.log("footer data", footerData?.data);
  const { expertise, services } = footerData?.data || {};

  return (
    <div className="flex flex-row lg:flex-col justify-start items-start gap-5">
      <FooterServices services={services} />
      <FooterExpertise expertise={expertise} />
    </div>
  );
};

export default FooterOverview;
