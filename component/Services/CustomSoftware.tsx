import React from "react";
import FeaturesCard from "../Common/FeaturesCard";

const customSoftwareData = {
  name: "Custom Software Solutions",
  description: "Choose Custom Solutions to Fit Your Business Needs",
  features: [
    { id: 1, icon: "far fa-clock", title: "ERP Systems", color: "#1ed0c6" },
    { id: 2, icon: "far fa-lightbulb", title: "Custom Software", color: "#ff5733" },
    { id: 3, icon: "far fa-hdd", title: "Cloud Solutions", color: "#ffd700" },
    { id: 4, icon: "fa-mobile-screen", title: "Mobile Apps", color: "#4caf50" },
    { id: 5, icon: "far fa-file-code", title: "Web Development", color: "#ff33bb" },
    { id: 6, icon: "far fa-lightbulb", title: "AI & Automation", color: "#8a2be2" },
    { id: 7, icon: "far fa-share-square", title: "Networking", color: "#ff4500" },
    { id: 8, icon: "far fa-shield-alt", title: "Cybersecurity", color: "#2196f3" },
  ],
};


const CustomSoftware = () => {
  return (
    <div>
      <FeaturesCard data={customSoftwareData} Width="w-full sm:w-[200px]" />
    </div>
  );
};

export default CustomSoftware;
