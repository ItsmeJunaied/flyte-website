"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";
import Link from "next/link";
import { useGetClientFeedbackQuery } from "@/redux/api/commonApi";
import { Skeleton } from "@/components/ui/skeleton";

type ClientFeedback = {
  company_name: string;
  description: string;
  image: string;
  name: string;
  designation: string;
  casestudy: { slug: string };
};

type successStoryProps = {
  successStory?: ClientFeedback[];
  bgColor?: string;
};

const SuccessStories: React.FC<successStoryProps> = ({ bgColor }) => {
  const { data: clientFeedback, isLoading } = useGetClientFeedbackQuery({ module: "caseStudies" });

  if (isLoading) {
    return <div className="w-full h-[300px] flex justify-center items-center">Loading...</div>;
  }

  console.log("data of client feedback", clientFeedback?.data?.data);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1545, // When screen is smaller than 1545px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1020, // When screen is smaller than 1020px
        settings: {
          slidesToShow: 2, // Change this based on your desired layout for smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For even smaller screens (tablets or phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320, // For the smallest screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${bgColor}`}>
      <div className="container py-6">
        <div className="w-full flex flex-col justify-center items-center">
          {/* Title Section */}
          <Title
            width="w-full"
            fontSize="text-2xl lg:text-4xl"
            title="Real stories of success and partnership"
          />
          <p className="lg:text-center text-neutral-500 text-sm font-normal mt-3 mb-5 lg:mb-10">
            Discover how our solutions have empowered businesses to grow, adapt, and thrive
          </p>

          {isLoading ? (
            <div className="flex flex-col lg:flex-row gap-4">
              <Skeleton className="w-[290px] lg:w-[574px] h-[200px] lg:h-[284px]" />
              <Skeleton className="w-[290px] lg:w-[574px] h-[200px] lg:h-[284px]" />
            </div>
          ) : (
            <div className="w-full px-5">
              <Slider {...settings}>
                {clientFeedback?.data?.data?.map((client: ClientFeedback, index: number) => (
                  <div
                    key={index}
                    className="w-full h-[220px] md:h-[280px] flex justify-center items-center px-2"
                  >
                    <div className="px-8 md:px-20 py-4 lg:py-6 bg-[#e7e7e7] rounded-md">
                      <div className="relative">
                        <h1 className="text-[#131313] text-xl mb-3 md:mb-5">{client?.company_name}</h1>
                        <span className="absolute top-7 -left-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 40 41"
                            fill="none"
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
                        <p className="text-[#121212] h-14 text-xs md:text-sm font-semibold md:line-clamp-3">
                          {client?.description}
                        </p>

                        <div className="flex flex-row justify-center items-center gap-3">
                          <img
                            className="rounded-full w-10 h-10 md:w-[50px] md:h-[50px] cover"
                            src={client?.image}
                            alt=""
                          />

                          <div>
                            <h1 className="text-[#121212] text-xs font-medium">{client?.name}</h1>
                            <p className="text-[#121212] text-[10px] font-normal">{client?.designation}</p>
                          </div>
                        </div>

                        <Link
                          href={`/case-studies/${client?.casestudy?.slug}`}
                          className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-base border border-[#DDD] hover:text-white bg-[#FFF] hover:bg-black transition duration-500 rounded-md md:rounded-lg"
                        >
                          View Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

{
  /* <div className="flex flex-col lg:flex-row gap-4">
<Skeleton className="w-[290px] lg:w-[574px] h-[200px] lg:h-[284px]" />
<Skeleton className="w-[290px] lg:w-[574px] h-[200px] lg:h-[284px]" />
</div> */
}
