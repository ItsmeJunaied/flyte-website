import React from "react";

type TitleProps = {
  title: string;
  padding?:string;
  width?: string;
  fontSize?: string;
  fontColor?: string;
};

const Title: React.FC<TitleProps> = ({
  width = "lg:w-1/2",
  padding="px-0",
  title,
  fontSize = " text-[24px] lg:text-[32px]",
  fontColor = "text-[#15161B]",
}) => {
  return (
    <div>
      <h1
        className={` ${width} ${fontColor} ${fontSize} ${padding} font-semibold font-['DM Sans']  text-start`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
