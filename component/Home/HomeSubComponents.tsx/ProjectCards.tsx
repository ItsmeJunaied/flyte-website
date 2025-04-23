"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

type ProjectData = {
  title: string;
  short_description: string;
  image: string;
  tag: string[];
  slug:string;
};

type ProjectCardsProps = {
  projectData: ProjectData[];
};

const ProjectCards: React.FC<ProjectCardsProps> = ({ projectData }) => {
  const swiperRef = useRef<any>(null);
  return (
    <div className="slider-container ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        spaceBetween={30}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper"
      >
        {projectData?.map((project, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center bg-white rounded-[20px] w-full md:max-w-[1200px]"
          >
            <Link  href={`/case-studies/${project?.slug}`}>
              <div className="bg-[#f7f7f7] w-full h-[500px] rounded-xl flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 p-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
                <div className="w-full lg:w-1/2 h-[200px] lg:h-[450px]">
                  <img src={project?.image} alt={project?.title} className="w-[100%]  rounded-xl" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-8 text-start">
                  <h1 className="text-[#212121] text-2xl font-semibold">{project?.title}</h1>
                  <p className="text-[#555555]">{project?.short_description}</p>
                  <div className="flex flex-row flex-wrap gap-3 lg:mt-5">
                    {project?.tag?.map((tagItem, idx) => (
                      <div
                        key={idx}
                        className="px-3 lg:px-5 py-1 lg:py-2 text-sm rounded-3xl bg-[#e0e0e0] hover:bg-[#5856d6] hover:text-white"
                      >
                        {tagItem}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="w-full flex justify-center items-center mt-5 gap-3">
        {/* Previous Button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()} // Go to the previous slide
          className="bg-[#333] hover:bg-btnColor p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 16.374L18.708 24.082L20.122 22.668L13.828 16.374L20.122 10.082L18.708 8.66602L11 16.374Z"
              fill="white"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()} // Go to the next slide
          className="bg-[#333] hover:bg-btnColor p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 16.958L13.292 9.25002L11.878 10.664L18.172 16.958L11.878 23.25L13.292 24.666L21 16.958Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
