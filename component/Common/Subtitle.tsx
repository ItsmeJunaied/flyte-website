import React from "react";

type SubTitleProps = {
  Subtitle: string;
};
const Subtitle: React.FC<SubTitleProps> = ({ Subtitle }) => {
  return (
    <div>
      <h1 className="   pb-3 text-lg font-semibold text-btnColor font-['DM Sans']  px-8 lg:px-0">
        {Subtitle}
      </h1>
    </div>
  );
};

export default Subtitle;
