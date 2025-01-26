"use client";
import React, { useState } from "react";

type Profile = {
  name: string;
  image: string;
  date: string;
};

type Article = {
  readTime: string;
  views: string;
};

type Card = {
  title: string;
  image?: string;
  description: string;
  keywords: string[];
  profile: Profile;
  article: Article;
};

type BlogData = {
  cards: Card[];
};

const BlogSection: React.FC<{ blogData: BlogData }> = ({ blogData }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  return (
    <div
      className="py-[40px] px-4 lg:px-0"
      style={{
        backgroundImage: "url('/images/BlogSectionBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="w-full text-center text-[#161c2d] text-2xl font-bold leading-10">
        <h1>News & Blogs</h1>
      </div>

      <div className="container grid gap-4 py-10 
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {blogData?.cards?.slice(0, visibleCount)?.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-[392px] h-[504.80px] bg-white flex-col justify-start items-center inline-flex transition-transform duration-500"
          >
            <div className="w-full h-[200px] relative">
              <img
                className="w-full h-full object-cover"
                src={card.image}
                alt={card.title}
              />
              <div className="w-full h-full absolute " />

              {/* Displaying keywords over the image */}
              <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                {card.keywords.map((keyword, idx) => (
                  <div
                    key={idx}
                    className="blogs-keyword-div px-3 py-1 rounded-lg text-xs"
                  >
                    <span className="inline-block text-white">{keyword}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 flex-col bg-white justify-start items-start gap-3 flex">
              <div className="text-[#121416] text-base font-semibold leading-loose">
                {card.title}
              </div>
              <div className="h-[220.80px] flex-col justify-start items-start gap-3 flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch grow shrink basis-0 justify-start items-center gap-2 inline-flex">
                    <div className="justify-start items-center gap-1.5 flex">
                      <img
                        className="w-[31.82px] h-[31.82px] rounded-full"
                        src={card.profile.image}
                        alt={card.profile.name}
                      />
                      <div className="text-[#121416] text-xs font-semibold leading-loose">
                        {card.profile.name}
                      </div>
                    </div>
                    <div className="w-[28.64px] h-[0.80px] bg-[#6c757d]/40" />
                    <div className="text-[#6c757d] text-xs font-normal leading-loose">
                      {card.profile.date}
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2.5 inline-flex">
                    <div className="justify-center items-center gap-1 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M11.333 12.1777L7.99967 10.7244L4.66634 12.1777V3.51107H11.333M11.333 2.17773H4.66634C4.31272 2.17773 3.97358 2.31821 3.72353 2.56826C3.47348 2.81831 3.33301 3.15745 3.33301 3.51107V14.1777L7.99967 12.1777L12.6663 14.1777V3.51107C12.6663 2.77107 12.0663 2.17773 11.333 2.17773Z"
                          fill="#6C757D"
                        />
                      </svg>
                      <div className="text-[#6c757d] text-xs font-normal leading-loose">
                        {card.article.readTime}
                      </div>
                    </div>
                    <div className="justify-center items-center gap-1 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M2 14.8451V5.51172H4.66667V14.8451H2ZM6.66667 14.8451V1.51172H9.33333V14.8451H6.66667ZM11.3333 14.8451V9.51172H14V14.8451H11.3333Z"
                          fill="#6C757D"
                        />
                      </svg>
                      <div className="text-[#6c757d] text-xs font-normal leading-loose">
                        {card.article.views}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-[#6c757d] text-xs font-normal leading-[17.96px]">
                  {card.description}
                </div>
                <div className="flex-col justify-start items-center flex">
                  <div className="svg-wrapper">
                    <svg
                      height="60"
                      width="320"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect className="shape" height="60" width="320" />
                    </svg>
                    <div className="text">Read More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < blogData.cards.length && (
        <div className="w-full h-[38px] justify-center items-center gap-2.5 inline-flex overflow-hidden">
          <button
            onClick={handleLoadMore}
            className="bg-white px-6 py-2.5 rounded-md text-[#191919] text-sm font-semibold font-['DM Sans'] shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] transition-all hover:bg-gray-200"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
