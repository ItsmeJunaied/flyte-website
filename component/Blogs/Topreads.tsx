import React from "react";

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
const Topreads: React.FC<{ blogData: BlogData }> = ({ blogData }) => {
  return (
    <div className=" border border-[#FFB2B2] bg-[#FFF8E6] py-10 px-5 lg:px-[40px] h-full rounded-2xl flex flex-col flex-1 ">
      <h1 className=" text-center text-black text-xl font-bold ">Top Reads</h1>

      <div className=" mt-5">
        {blogData?.cards?.slice(0, 3)?.map((card, index) => (
          <div
            key={index}
            className=" bg-white flex-row gap-5 justify-start items-stretch flex transition-transform duration-500 mb-2"
          >
            <div className="flex-1 relative h-auto">
              <img
                className="w-full h-full object-cover"
                src={card.image}
                alt={card.title}
              />
              {/* Overlay */}
              <div className="absolute h-full inset-0 bg-black/25" />
              {/* Keywords over the image */}
              <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                {card.keywords.map((keyword, idx) => (
                  <div
                    key={idx}
                    className="blogs-keyword-div px-3 py-1 rounded-lg text-xs bg-white/50"
                  >
                    <span className="inline-block text-white">{keyword}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className=" w-1/2 py-5  flex-col justify-start items-start gap-3 flex-1">
              <div className=" w-fit lg:w-[360px] lg:h-10 text-[#121416] text-base text-wrap font-semibold lg:leading-loose mb-2 lg:mb-0">
                {card.title}
              </div>
              <div className=" flex-col justify-start items-start gap-3 flex">
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
                {/* <div className="self-stretch text-[#6c757d] text-xs font-normal leading-[17.96px]">
                  {card.description}
                </div> */}
                <div className="flex-col justify-start items-center flex">
                  <div className=" border-b-[1px] border-black hover:border-btnColor px-4">
                    {/* <svg
                      height="60"
                      width="320"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect className="shape" height="60" width="320" />
                    </svg> */}
                    <p className="text-black hover:text-btnColor">View Post</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topreads;
