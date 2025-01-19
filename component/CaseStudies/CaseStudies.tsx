/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";
import Subtitle from "../Common/Subtitle";

const CaseStudies = () => {
  const subtitle: string = "Explore Our Success Stories";
  const title: string = "See How We Helped Businesses Achieve Their Goals";

  return (
    <div className="w-full py-10">
      <div className="w-full flex flex-row">
        <div className=" w-full  flex flex-col lg:flex-row items-center h-full overflow-x-hidden  ">
          <div className=" lg:pl-16 lg:pr-5 w-full lg:w-1/3 flex flex-col gap-[24px] h-full justify-center px-4 lg:px-0 mb-5 lg:mb-0">
            <Subtitle Subtitle={subtitle} />
            <h1 className="text-zinc-950 text-4xl font-bold  leading-[46px]">
              {title}
            </h1>
            <p className=" lg:w-[520px] text-[#12094a] text-sm font-normal leading-snug  lg:px-0">
              Explore success stories of businesses transforming challenges into
              opportunities with our solutions.
            </p>

            <div className="h-[42px] w-fit px-8 py-3 bg-[#5856d6] rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden">
              <p className="text-white text-sm font-semibold ">
                Book A Consultation
              </p>
            </div>
          </div>

          <div className=" w-full lg:w-2/3 flex flex-col gap-4 h-full ">
            {/* <div className=' bg-deep-orange-300 opacity-50 w-96 h-96 rounded-full'>

                    </div> */}
            <Marquee
              className="rounded-lg"
              gradient={false}
              speed={30}
              pauseOnHover={true}
            >
              <div className="px-2">
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case-study-banner.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case-study-img-2.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case-study-banner.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case-study-img-2.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case-study-img-2.png"
                  alt=""
                />
              </div>
            </Marquee>

            <Marquee
              className=" rounded-xl"
              gradient={false}
              speed={25}
              pauseOnHover={true}
              direction="right"
            >
              <div className="px-2">
                <img
                  className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case-study-img-3.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case-study-img-4.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case-study-img-3.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case-study-img-4.png"
                  alt=""
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 mt-2">
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case-study-banner.png"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case-study-img-2.png"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case-study-img-3.png"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case-study-img-4.png"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case-study-img-4.png"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case-study-img-4.png"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case-study-img-4.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default CaseStudies;
