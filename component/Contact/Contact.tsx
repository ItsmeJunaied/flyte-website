import React from "react";
import { contactUsKeyPoints } from "@/api/Dummy";
import ContactUsKeyPointComp from "./ContactUsKeyPointComp";
import ContactUsFormComp from "./ContactUsFormComp";
import Title from "../Common/Title";
import Subtitle from "../Common/Subtitle";

type contsctUsData = {
  id: number;
  title: string;
  icon: string
};
type contactUsKeyPointsProps = {
  contsctUsData?: contsctUsData[];
};

const Contact: React.FC<contactUsKeyPointsProps> = ({ contsctUsData }) => {
  const headertitle: string = "Get in Touch with Us";
  const KeyPoints = contsctUsData || contactUsKeyPoints;
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 py-12">
      <div className="w-full ">
        <div className="mb-5 flex w-full items-center justify-center ">
          {/* <Subtitle Subtitle="Contact Us" /> */}
          <div className="w-full mb-5">
            <Subtitle Subtitle={"Contact Us"} />
            <Title
              width="w-full"
              // fontSize="text-lg lg:text-3xl"
              title={headertitle}
            />
          </div>
        </div>
        <div className="h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center  lg:items-center gap-8 ">
          {/* form section */}

          <div className="w-full lg:w-2/3">
            <ContactUsFormComp headertitle={headertitle} />
          </div>

          {/* key section */}
          <div className="w-full lg:w-1/3 ">
            <ContactUsKeyPointComp KeyPoints={KeyPoints} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
