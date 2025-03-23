import Title from "@/component/Common/Title";
import React from "react";

type BannerDataProps = {
  title: string;
  description: string;
  image: string;
};

const AboutBanner: React.FC<BannerDataProps> = ({ title, description, image }) => {
  return (
    <div className=" mt-5 lg:mt-40">
      <span className="container flex flex-col items-center my-2 md:my-7">
        <Title title={title} width="full" fontSize="text-lg lg:text-4xl" />
        <p
          className="text-center text-[#afadb5] text-xs md:text-sm md:mt-2"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </span>
      <div>
        <img className="w-full lg:h-[500px] object-cover" src={image} alt={title} />
      </div>
    </div>
  );
};

export default AboutBanner;
