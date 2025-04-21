import Link from "next/link";
import React from "react";

const HireSteps = () => {
  return (
    <div className="bg-white py-4 lg:py-8">
      <div className="container">
        <div>
          <h1 className="text-[#060b13] text-2xl lg:text-[32px] font-semibold leading-[30px]">
            Hire Our Expert Team in 5 Simple Steps
          </h1>
          <p className="py-6 text-gray-600 text-sm lg:text-base font-normal">
            Hire a team of dedicated web developers quickly and easily to meet your business needs and quickly
            scale your team with expert web developers.
          </p>
        </div>
        <div>
          <img className="hidden md:block" draggable={false} src="/images/hire/hire-stpes-desktop.png" alt="" />
          <img className="md:hidden mx-auto" draggable={false} src="/images/hire/hire-steps-mobile.png" alt="" />
        </div>
        <div className="w-fit mx-auto mt-6">
          <Link
            href="/hire/application-form"
            className="px-6 py-2.5 flex items-center gap-2 bg-[#5856d6] hover:bg-white border border-[#5856d6] rounded-md text-white hover:text-[#5856d6] text-sm font-semibold transition duration-300"
          >
            Let&apos;s Start!{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                className="stroke-white group-hover:stroke-[#5856d6] transition duration-300"
              >
                <path
                  d="M3.95837 8.37305H13.2917"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.625 3.70703L13.2917 8.3737L8.625 13.0404"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HireSteps;
