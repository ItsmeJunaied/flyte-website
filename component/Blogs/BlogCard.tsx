import Link from "next/link";
import React from "react";
import { Blog } from "./FavoriteBlogs";

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  const { image, title, tag, date, view_count, short_description, slug, admin } = blog || {};
  return (
    <div className="w-full max-w-[392px] h-[504.80px] bg-white group">
      <div className="w-full h-[200px] relative overflow-hidden">
        {/* Image */}
        <img
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          src={image}
          alt={title}
        />

        {/* Black Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Tags */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-2 z-10">
          {tag.map((tagItem, tagIndex) => (
            <div key={tagIndex} className="blogs-keyword-div px-3 py-1 rounded-lg text-xs">
              <span className="inline-block text-white">{tagItem}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 flex-col bg-white group-hover:bg-cyan-50 group-hover:shadow-xl transition-all duration-500 justify-start items-start gap-3 flex">
        <h2 className="h-16 overflow-hidden text-[#121416] text-base font-semibold leading-loose">{title}</h2>
        <div className="h-[220.80px] flex-col justify-start items-start gap-3 flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch grow shrink basis-0 justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-center gap-1.5 flex">
                <img
                  className="w-[31.82px] h-[31.82px] rounded-full border"
                  src={admin?.profile}
                  alt={admin?.name}
                />
                <div className="text-[#121416] text-xs font-semibold leading-loose">{admin?.name}</div>
              </div>
              <div className="w-[28.64px] h-[0.80px] bg-[#6c757d]/40" />
              <div className="text-[#6c757d] text-xs font-normal leading-loose">{date}</div>
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
                  {/* {card.article.readTime} */} 5 min read
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
                  {view_count || 0} views
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[54px] overflow-hidden text-[#6c757d] text-xs font-normal leading-[17.96px]">
            {short_description}
          </div>
          <div className="flex-col justify-start items-center flex">
            <Link href={`/company/news-and-blogs/${slug}`} className="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">Read More</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
