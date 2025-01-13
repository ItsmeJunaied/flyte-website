import CommonBanner from "@/component/Common/CommonBanner";
import React from "react";

const servicesBannerData = {
  bgImage: "https://i.ibb.co.com/18ym442/Rectangle-3843.png",
  subtitle: "Explore Our Services, Built to Drive Your Success",
  title: "Discover Professional Services for Your Business",
  description:
    "We provide expert services to enhance your operations, improve efficiency, and help you achieve your goals.",
  btnName: "Book A Consultation",
  btnPath: "/about",
};

export const metadata = {
  title: "Services | Flyte Solutions Ltd.",
  description: "Get in touch with Flyte Solutions Ltd. for any inquiries or support.",
};
const page = () => {
  return (
    <div>
      <CommonBanner bannerData={servicesBannerData} />
    </div>
  );
};

export default page;
