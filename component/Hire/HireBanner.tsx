import React from "react";
import CommonBanner from "../Common/CommonBanner";

const hireBannerData = {
  bgImage: "https://i.ibb.co.com/bH3K5FL/Rectangle-3843-2x.png",
  subtitle: "Dedicated Developers, Aligned with Your Goals",
  title: "Hire a dedicated development team built for your needs",
  description: "Expand your team with dedicated developers who integrate smoothly and enhance your project’s success.",
  btnName: "Build Your Development Team",
  btnPath: "/hire/application-form",
};

const HireBanner = () => {
  return (
    <div>
      <CommonBanner bannerData={hireBannerData} />
    </div>
  );
};

export default HireBanner;
