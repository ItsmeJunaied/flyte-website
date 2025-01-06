"use client"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const PlaneLottieBanner = () => {
  return (
    <div>
      <DotLottieReact
        src="/plane.lottie"
        loop
        autoplay
        style={{
          width: "200px",
          height: "200px",
        }}
        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default PlaneLottieBanner;
