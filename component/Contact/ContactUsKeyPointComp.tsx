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
      <div className="h-full w-full  flex flex-col justify-center items-center gap-10 bg-[#FFFFFF]  px-10 rounded-[30px] py-10 ">
        <div>
          <p className="text-center text-black text-2xl font-semibold font-['Open Sans']">
            What's Next With Flyte?
          </p>
        </div>

        <div className=" flex flex-col gap-4">
          {KeyPoints &&
            KeyPoints?.map((points) => (
              <div
                key={points?.id}
                className=" flex flex-row justify-between items-center w-full gap-3"
              >
                <div className="w-1/6 ">
                  <div className=" w-10 h-10 bg-transparent border-[2px] border-[#EAEAEA] rounded-xl flex justify-center items-center text-[#868686]">
                    <i className={points?.icon}></i>
                  </div>
                </div>
                <div className=" w-5/6 ">
                  <h1 className="text-black text-base font-normal font-['Open Sans']">
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
