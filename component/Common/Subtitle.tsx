import React from "react";

type SubTitleProps = {
  Subtitle: string;
};
const Subtitle: React.FC<SubTitleProps> = ({ Subtitle }) => {
  return (
    <div>
      <h1 className="pb-2.5 text-lg text-btnColor font-['DM Sans'] lg:px-0">
        {Subtitle}
      </h1>
    </div>
  );
};

export default Subtitle;
