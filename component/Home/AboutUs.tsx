/* eslint-disable @next/next/no-img-element */

import React from "react";
import Title from "../Common/Title";
import Subtitle from "../Common/Subtitle";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import PlaneLottieAboutUs from "./HomeSubComponents.tsx/PlaneLottieAboutUs";
const AboutUs: React.FC = () => {
  return (
    <div className="container px-5 lg:px-[80px] pt-12">
      <Subtitle Subtitle="About Company" />
      <Title title={"Solutions that Drive Your Business Forward"} />

      <div>
        <div className="  py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 justify-center w-full  items-center ">
            <div className=" w-full max-h-[450px]  ">
              {/* Main Image */}
              <img
                src="https://i.ibb.co.com/hsCv8qw/Image.png"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className=" w-full flex flex-col gap-4">
            {/* Lottie Animation */}
            {/* <PlaneLottieAboutUs /> */}

            {/* Content */}
            <p className="text-[#9a9a9a] text-base font-normal ">
              <span className="  ">Flyte</span> Solutions is a trusted global
              provider of cutting-edge IT services, dedicated to empowering
              businesses with innovative and efficient solutions. From system
              integration to cloud technologies, we tailor our expertise to meet
              the evolving needs of diverse industries.
            </p>
            <p className="text-[#6c757d] text-base leading-7 mb-8">
              With a focus on quality and customer satisfaction, Flyte has
              earned global recognition, including ISO certification. Our
              commitment to excellence drives operational success, ensuring
              reliability and top-tier service at every step.
            </p>

            {/* Features List */}
            <div className=" flex flex-wrap justify-between items-center gap-4">
              <div className=" flex flex-col justify-center items-center gap-2">
                <img
                  className=" w-10 h-10 object-cover"
                  src="https://i.ibb.co.com/wN59CwQ/flat-color-icons-calendar.png"
                  alt="Years Experience"
                />
                <p className=" text-center text-black text-xl font-bold">12+</p>
                <p className="text-center text-black text-sm font-medium ">
                  Years Experience
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center gap-2">
                <img
                  className=" w-10 h-10 object-cover"
                  src="https://i.ibb.co.com/3N1bD6Y/fxemoji-clipboard.png"
                  alt="Projects Completed"
                />
                <p className=" text-center text-black text-xl font-bold">
                  350+
                </p>
                <p className="text-center text-black text-sm font-medium ">
                  Projects Completed
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center gap-2">
                <img
                  className=" w-10 h-10 object-cover"
                  src="https://i.ibb.co.com/CBFFjvr/emojione-handshake.png"
                  alt="Recurring Clients"
                />
                <p className=" text-center text-black text-xl font-bold">97%</p>
                <p className="text-center text-black text-sm font-medium ">
                  Recurring Clients
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center gap-2">
                <img
                  className=" w-10 h-10 object-cover"
                  src="https://i.ibb.co.com/wcBcfyL/twemoji-delivery-truck.png"
                  alt="Solutions Delivered"
                />
                <p className=" text-center text-black text-xl font-bold">
                  500+
                </p>
                <p className="text-center text-black text-sm font-medium ">
                  Solutions Delivered
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="w-fit bg-btnColor px-6 py-3 rounded-lg mt-3 flex justify-center items-center">
              <Link className="w-fit h-fit text-white" href={"/"}>
                <p>Learn more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
