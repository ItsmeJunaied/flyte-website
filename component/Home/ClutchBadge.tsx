import React from "react";
import { clutchBadges } from "../../api/Dummy";

const ClutchBadge = () => {
  return (
    <div className="flex flex-row flex-wrap gap-x-8 lg:gap-x-3 gap-y-4 lg:gap-y-0 max-w-[300px] lg:max-w-lg justify-center lg:justify-start">
      {clutchBadges?.map((badge, index) => (
        <div key={index}>
          <a href="https://clutch.co/profile/flyte-solutions" target="_blank" rel="noopener noreferrer">
            <iframe
              className="w-[95px] h-[100px] rounded-lg border-none"
              src={badge?.src}
              title={badge?.title}
              style={{ border: "none" }}
            ></iframe>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ClutchBadge;
