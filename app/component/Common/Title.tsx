import React from "react";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div>
      <h1 className=" w-[400px] lg:w-[500px]  text-black text-2xl font-semibold font-['DM Sans'] line-clamp-2 px-8 lg:px-0">{title}</h1>
    </div>
  );
};

export default Title;
