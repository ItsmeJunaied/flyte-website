/* eslint-disable @next/next/no-img-element */
import React from "react";
import Subtitle from "../Common/Subtitle";
// import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import PlaneLottieAboutUs from "./HomeSubComponents.tsx/PlaneLottieAboutUs";
const AboutUs: React.FC = () => {
  return (
    <div className="container pt-5">
      <Subtitle Subtitle="About Company" />
      <h2 className="max-w-[492px] justify-start text-black text-2xl lg:text-4xl font-semibold">Solutions That Drive Your Business Forward</h2>

      <div>
        <div className="pt-6 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
          <div className=" w-full h-full flex flex-col gap-4">
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
            <div className=" w-full flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className=" flex flex-row gap-4">
                <div className=" flex flex-col justify-center items-center gap-2">
                  <img
                    className=" w-10 h-10 object-cover"
                    src="https://i.ibb.co.com/wN59CwQ/flat-color-icons-calendar.png"
                    alt="Years Experience"
                  />
                  <p className=" text-center text-black text-xl font-bold">
                    12+
                  </p>
                  <p className="text-center text-black text-sm font-medium ">
                    Years Experience
                  </p>
                </div>
                <div className="">
                  <Separator orientation="vertical" />
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
              </div>

              <div className=" w-fit h-full items-center space-x-1 text-sm hidden lg:flex">
                <Separator orientation="vertical" />
              </div>

              <div className="flex flex-row gap-4">
                <div className=" flex flex-col justify-center items-center gap-2">
                  <img
                    className=" w-10 h-10 object-cover"
                    src="https://i.ibb.co.com/CBFFjvr/emojione-handshake.png"
                    alt="Recurring Clients"
                  />
                  <p className=" text-center text-black text-xl font-bold">
                    97%
                  </p>
                  <p className="text-center text-black text-sm font-medium ">
                    Recurring Clients
                  </p>
                </div>

                <div className="flex ">
                  <Separator orientation="vertical" />
                </div>

                <div className=" flex flex-row gap-2">
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
              </div>
            </div>

            {/* Learn More Button */}
            <div className="w-full flex lg:justify-start justify-center lg:items-start items-center">
              <Link className="w-fit h-fit bgGradientNevyBlue px-[32px] py-[12px] rounded-lg mt-5 text-white" href={"/company"}>
                <p>Explore Business Solutions</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
