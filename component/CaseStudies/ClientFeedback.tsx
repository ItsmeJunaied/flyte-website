"use client";
import React from "react";

type ClientFeedbackProps = {
  companyName: string;
  description: string;
  clientImage: string;
  clientName: string;
  clientdesignation: string;
};

const ClientFeedback = (props: ClientFeedbackProps) => {
  const { companyName, description, clientImage, clientName, clientdesignation } = props;
  return (
    <div className="container my-10">
      <h2 className="text-xl lg:text-3xl text-center font-semibold lg:leading-[32px]">
        What Our Customer&apos;s Are Saying
      </h2>

      <p className="mt-4 w-full lg:w-[50%] mx-auto text-sm lg:text-base text-center text-[#12094A]">
        We value our clients feedback and take pride in delivering exceptional solutions that drive success.
        Hear what they say about us.
      </p>

      <div className="w-full lg:w-[715px] mx-auto mt-5 lg:mt-10 px-2 lg:flex justify-center items-center">
        <div className="px-8 md:px-20 py-4 lg:py-6 bg-[#e7e7e7] rounded-md">
          <div className="relative">
            <h1 className="h-10 lg:h-full text-[#131313] text-base lg:text-xl mb-3 md:mb-5 line-clamp-2 lg:line-clamp-1 leading-5">
              {companyName || "Missing Company Name"}
            </h1>
            <span className="absolute top-10 lg:top-7 -left-4 lg:-left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 41"
                fill="none"
                className="w-5 lg:w-8 h-5 lg:h-8"
              >
                <g opacity="0.2">
                  <path
                    d="M33.848 30.1709C36.993 26.7576 36.6763 22.3742 36.6663 22.3242V8.99089C36.6663 8.54886 36.4907 8.12494 36.1781 7.81237C35.8656 7.49981 35.4417 7.32422 34.9996 7.32422H24.9996C23.1613 7.32422 21.6663 8.81922 21.6663 10.6576V22.3242C21.6663 22.7662 21.8419 23.1902 22.1544 23.5027C22.467 23.8153 22.8909 23.9909 23.333 23.9909H28.463C28.427 24.8147 28.1809 25.6157 27.748 26.3176C26.9013 27.6526 25.3063 28.5642 23.0046 29.0242L21.6663 29.2909V33.9909H23.333C27.9713 33.9909 31.5096 32.7059 33.848 30.1709ZM15.503 30.1709C18.6496 26.7576 18.3313 22.3742 18.3213 22.3242V8.99089C18.3213 8.54886 18.1457 8.12494 17.8331 7.81237C17.5206 7.49981 17.0967 7.32422 16.6546 7.32422H6.65462C4.81629 7.32422 3.32129 8.81922 3.32129 10.6576V22.3242C3.32129 22.7662 3.49688 23.1902 3.80944 23.5027C4.122 23.8153 4.54593 23.9909 4.98796 23.9909H10.118C10.082 24.8147 9.83587 25.6157 9.40296 26.3176C8.55629 27.6526 6.96129 28.5642 4.65962 29.0242L3.32129 29.2909V33.9909H4.98796C9.62629 33.9909 13.1646 32.7059 15.503 30.1709Z"
                    fill="black"
                  />
                </g>
              </svg>
            </span>
          </div>

          <div className="flex flex-col justify-start items-start gap-2 md:gap-5">
            <p className="text-[#121212] w-full lg:w-[715px] h-12 lg:h-16 text-xs lg:text-sm font-semibold line-clamp-3">
              {description || "Missing Description"}
            </p>

            <div className="flex flex-row justify-center items-center gap-3">
              <img
                className="rounded-full w-10 h-10 md:w-[50px] md:h-[50px] text-[10px] object-cover border border-white"
                src={clientImage}
                alt="client image"
              />

              <div>
                <h1 className="text-[#121212] text-xs font-medium">{clientName || "Missing client name"}</h1>
                <p className="text-[#121212] text-[10px] font-normal">
                  {clientdesignation || "Missing client designation"}
                </p>

                {/* Rating */}
                <div className="flex gap-1 text-btnColor mt-1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
