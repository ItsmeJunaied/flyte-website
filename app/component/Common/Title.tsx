import React from "react";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  const textColor =
  title === "Featured Case Studies" ? "text-white" : "text-[#15161B]";

return (
  <div>
    <h1
      className={`lg:w-1/2 ${textColor} text-2xl lg:text-5xl font-semibold font-['DM Sans'] px-8 lg:px-0 text-start`}
    >
        {title}
      </h1>
    </div>
  );
};

export default Title;
