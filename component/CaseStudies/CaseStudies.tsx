/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

const CaseStudies = () => {
  const subtitle: string = "Explore Our Success Stories";
  const title: string = "See How We Helped Businesses Achieve Their Goals";

  return (
    <div className="w-full py-5 lg:py-10">
      <div className="w-full flex flex-row">
        <div className="container w-full flex flex-col lg:flex-row items-center gap-5 h-full overflow-x-hidden">
          <div className="w-full lg:w-1/3 flex flex-col gap-3 lg:gap-6 h-full justify-center mb-5 lg:mb-0">
            <h4 className="text-[#5856d6] text-lg font-bold">{subtitle}</h4>
            <h1 className="text-zinc-950 text-2xl lg:text-4xl font-bold lg:leading-[46px]">
              {title}
            </h1>
            <p className="text-[#12094a] text-sm font-normal leading-snug  lg:px-0">
              Explore success stories of businesses transforming challenges into
              opportunities with our solutions.
            </p>

            <div className="h-[42px] w-fit px-8 py-3 bg-[#5856d6] rounded-md justify-start items-start gap-2.5 inline-flex overflow-hidden">
              <p className="text-white text-sm font-semibold ">
                Book A Consultation
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-4 h-full ">
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
                  src="/images/case/case1.jpg"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case/picture-ongold.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case/hydro-one.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case/pushlocal.jpg"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className=" w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case/fsa.png"
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
                  src="/images/case/hba.jpg"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                   src="/images/case/realestate1.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                  src="/images/case/erp.png"
                  alt=""
                />
              </div>
              <div className="px-2">
                <img
                  className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
                   src="/images/case/12.jpg"
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
              src="/images/case/keeferealestate.png"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case/cds.jpg"
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
              src="/images/case/bloomfire.jpg"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case/americandesign.jpg"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case/1.jpg"
              alt=""
            />
          </div>
          <div className="px-2">
            <img
              className="w-[250px] lg:w-[350px]  h-[150px] lg:h-[250px] rounded-xl"
              src="/images/case/clinicaltrial.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default CaseStudies;
