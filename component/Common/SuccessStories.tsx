"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css"; // Ensure global styles are imported
import Title from "./Title";
import { successStories } from "@/api/Dummy";

type successStory = {
  companyName: string;
  description: string;
  image: string;
  AuthorName: string;
  AuthorTag: string;
};

type successStoryProps = {
  successStory?: successStory[];
};

const SuccessStories: React.FC<successStoryProps> = () => {
  const successStory = successStories;

  const settings = {
    infinite: true, // Set to true to enable infinite scrolling
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1545,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        {/* Title Section */}
        <Title fontSize="text-lg" title="Real stories of success and partnership" />
        <p className="w-[492px] text-center text-neutral-500 text-sm font-normal font-['Open Sans']">
          Discover how our solutions have empowered businesses to grow, adapt, and thrive
        </p>

        {/* Carousel Section */}
        <Slider {...settings}>
          {successStory.map((story, index) => (
            <div key={index} className="w-[560px] h-[261.89px] px-20 py-6 bg-gradient-to-r from-[#5c5c5c] to-[#ffb5a8] flex-col justify-start items-start gap-10 inline-flex">
              {/* Background Decoration */}
              <div className="w-10 h-[13.89px] relative overflow-hidden" />
              <div className="w-10 h-10 relative opacity-20 overflow-hidden" />
              {/* Story Content */}
              <div className="self-stretch h-40 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-white text-sm font-semibold font-['Nunito']">
                  {story.description}
                </div>
                <div className="justify-center items-center gap-2.5 inline-flex">
                  <img
                    className="w-10 h-10 relative rounded-[30px]"
                    src={story.image || "https://via.placeholder.com/40x40"}
                    alt={story.AuthorName}
                  />
                  <div className="flex-col justify-center items-start inline-flex">
                    <div className="text-white text-xs font-medium font-['Nunito']">
                      {story.AuthorName}
                    </div>
                    <div className="text-white text-[10px] font-normal font-['Nunito']">
                      {story.AuthorTag}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex overflow-hidden">
                  <div className="text-[#191919] text-sm font-semibold font-['DM Sans']">
                    View Case Study
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SuccessStories;
