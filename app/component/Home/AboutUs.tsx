/* eslint-disable @next/next/no-img-element */
import React from "react";
import Title from "../Common/Title";
import Subtitle from "../Common/Subtitle";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto pt-12">
      <Subtitle Subtitle="About Company" />
      <Title title={"Websites that tell your brand's story"} />

      <div>
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row justify-center gap-8 items-center">
          {/* Left Content */}
          <div className=" w-full lg:w-1/2 flex flex-col gap-8 justify-center  items-center  " data-aos="fade-right">
            <div className="relative max-w-[280px] lg:max-w-[400px] max-h-[650px]  ">
              {/* Main Image */}
              <img
                src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/about-us-img.jpg"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg  "
              />

              {/* Top-Left Badge */}
              <div className="absolute top-10 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#6366f1] text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xl font-bold">12+</div>
                <div className="text-sm">Work Experience</div>
              </div>

              {/* Top-Right Badge */}
              <div className="absolute top-0 right-10 translate-x-1/2 -translate-y-1/2 bg-[#6366f1] text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xl font-bold">350+</div>
                <div className="text-sm">Project Completed</div>
              </div>

              {/* Bottom-Left Badge */}
              <div className="absolute bottom-10 left-0 -translate-x-1/2 translate-y-1/2 bg-[#6366f1] text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xl font-bold">97%</div>
                <div className="text-sm">Recurring Clients</div>
              </div>

              {/* Bottom-Right Badge */}
              <div className="absolute bottom-20 right-10 translate-x-1/2 translate-y-1/2 bg-[#6366f1] text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xl font-bold">500+</div>
                <div className="text-sm">Solutions Delivered</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className=" w-full lg:w-1/2 flex flex-col justify-center lg:justify-start items-center  gap-4" data-aos="fade-left" >
            <div className=" max-w-[500px] max-h-[600px] flex flex-col justify-center gap-4">
              <p className="text-[#6c757d] text-base leading-7 mb-6">
                Flyte Solutions is a trusted global provider of cutting-edge IT
                services, dedicated to empowering businesses with innovative and
                efficient solutions. From system integration to cloud
                technologies, we tailor our expertise to meet the evolving needs
                of diverse industries.
              </p>
              <p className="text-[#6c757d] text-base leading-7 mb-8">
                With a focus on quality and customer satisfaction, Flyte has
                earned global recognition, including ISO certification. Our
                commitment to excellence drives operational success, ensuring
                reliability and top-tier service at every step.
              </p>
              {/* Features List */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 ">
                  <span className="text-btnColor text-lg px-1 py-0.5 rounded-full">
                    <FaCheckCircle />
                  </span>
                  <span className="text-[#15161B] font-semibold">
                    Client Satisfaction
                  </span>
                </div>

                <div className="flex items-center gap-2 ">
                  <span className="text-btnColor text-lg px-1 py-0.5 rounded-full">
                    <FaCheckCircle />
                  </span>
                  <span className="text-[#15161B] font-semibold">
                    Full Flexibility
                  </span>
                </div>
                <div className="flex items-center gap-2 ">
                  <span className="text-btnColor text-lg px-1 py-0.5 rounded-full">
                    <FaCheckCircle />
                  </span>
                  <span className="text-[#15161B] font-semibold">
                    Time Zone Aligned
                  </span>
                </div>

                <div className="flex items-center gap-2 ">
                  <span className="text-btnColor text-lg px-1 py-0.5 rounded-full">
                    <FaCheckCircle />
                  </span>
                  <span className="text-[#15161B] font-semibold">
                    24/7 Availability
                  </span>
                </div>
              </div>

              <div className=" w-fit  bg-btnColor px-6 py-3 rounded-lg mt-3 flex justify-center items-center">
                <Link className=" w-fit h-fit text-white " href={"/"}>
                  <p className="">Learn more</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
