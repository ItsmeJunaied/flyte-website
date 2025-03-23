import Link from "next/link";
import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
type KeyPoint = {
  id: number;
  title: string;
  icon: string;
};

type ContactUsKeyPointCompProps = {
  KeyPoints: KeyPoint[]; // Expecting an array of KeyPoint objects
};

const ContactUsKeyPointComp: React.FC<ContactUsKeyPointCompProps> = ({
  KeyPoints,
}) => {
  return (
    <div>
      <div className="px-3 lg:px-10 py-5 lg:py-10 w-full h-full flex flex-col justify-center items-center gap-5 lg:gap-10 bg-[#FFFFFF] rounded-lg lg:rounded-[30px]">
        <div>
          <p className="text-center text-black text-xl lg:text-2xl font-semibold">
          What's Next With Flyte?
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {KeyPoints &&
            KeyPoints?.map((points) => (
              <div
                key={points?.id}
                className=" flex flex-row justify-between lg:items-center w-full gap-3"
              >
                <div className="w-1/6 ">
                  <div className="w-8 lg:w-10 h-8 lg:h-10 bg-transparent border-[1px] lg:border-[2px] border-[#EAEAEA] rounded-md lg:rounded-xl flex justify-center items-center text-[#868686]">
                    <i className={points?.icon}></i>
                  </div>
                </div>
                <div className=" w-5/6 ">
                  <h1 className="text-black text-sm lg:text-base">
                    {points?.title}
                  </h1>
                </div>
              </div>
            ))}
        </div>

        <div className=" w-full flex justify-center">
          <Link
            href={`/schedule-consultation`}
            className="h-10 px-6 py-2.5 bg-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex overflow-hidden"
          >
            <p className="text-[#191919] text-sm font-semibold font-['DM Sans']">
              Book A Consultation
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsKeyPointComp;
