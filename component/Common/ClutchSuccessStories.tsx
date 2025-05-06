"use client";
import React, { useEffect, useState } from "react";

const ClutchSuccessStories = () => {
  const [iframeHeight, setIframeHeight] = useState("400px");

  const iframeSrc = `https://widget.clutch.co/widgets/get/4?ref_domain=yourdomain.com&uid=122766&reviews=370785,370566,370488,370459,369723`;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.clutchWidgetHeight) {
        setIframeHeight(`${event.data.clutchWidgetHeight}px`);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="container py-6 mx-auto max-w-5xl">
      <h2 className="text-2xl lg:text-4xl font-semibold text-center lg:leading-[50px]">Real stories of success and partnership</h2>
      <p className="lg:text-center text-neutral-500 text-sm font-normal mt-3 mb-5 lg:mb-10">
        Discover how our solutions have empowered businesses to grow, adapt, and thrive
      </p>
      <iframe
        src={iframeSrc}
        title="Clutch Reviews"
        width="100%"
        height={iframeHeight}
        style={{ border: "none" }}
        loading="lazy"
        className="w-full h-[500px lg:h-[700px]"
      />
    </div>
  );
};

export default ClutchSuccessStories;
