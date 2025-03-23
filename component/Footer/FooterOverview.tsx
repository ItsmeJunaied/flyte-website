"use client";
import { useGetFooterQuery } from "@/redux/api/footerApi";
import React from "react";
import FooterExpertise from "./FooterExpertise";
import FooterServices from "./FooterServices";
import FooterContact from "./FooterContact";
import FooterSkeleton from "./FooterSkeleton";

const FooterOverview = () => {
  const { data: footerData, isLoading } = useGetFooterQuery({});

  const { expertise, services } = footerData?.data || {};

  return (
    <div>
      {isLoading ? (
        <FooterSkeleton />
      ) : (
        <div className="footer text-base-content py-10 bg-[#2A3342]">
          <FooterContact footerContact={footerData?.data || {}} />
          <div className="flex flex-row lg:flex-col justify-start items-start gap-5">
            <FooterServices services={services} />
            <FooterExpertise expertise={expertise} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterOverview;
