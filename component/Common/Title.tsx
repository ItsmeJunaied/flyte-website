import React from "react";

type TitleProps = {
  title: string;
  width?: string;
  fontSize?: string;
  fontColor?: string;
};

const Title: React.FC<TitleProps> = ({
  width = "lg:w-1/2",
  title,
  fontSize = "text-2xl lg:text-5xl",
  fontColor = "text-[#15161B]",
}) => {
  return (
    <div>
      <h1
        className={` ${width} ${fontColor} ${fontSize} font-semibold font-['DM Sans'] px-8 lg:px-0 text-start`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
