import React from "react";
import StepCard from "../Common/StepCard";

const serviceProcessData = {
  name: "Our Custom Software Development Process",
  description: "We create tailored, scalable software for seamless integration and business efficiency.",
  title: "Our Proven Process for Delivering Custom Software",
  features: [
    {
      id: 1,
      name: "Discovery & Planning",
      details:
        "We analyze your business needs, define project goals, and create a detailed roadmap to guide development.",
    },
    {
      id: 2,
      name: "Design & Prototyping",
      details:
        "We design wireframes and prototypes to visualize the software’s interface, ensuring it’s user-friendly and visually appealing.",
    },
    {
      id: 3,
      name: "Development",
      details:
        "Using agile methodologies, we build scalable and secure software tailored to your requirements.",
    },
    {
      id: 4,
      name: "Testing & QA",
      details:
        "We rigorously test the software to ensure it’s bug-free, performs well, and meets quality standards.",
    },
    {
      id: 5,
      name: "Deployment & Support",
      details: "We handle deployment and provide ongoing support to keep your software running smoothly.",
    },
  ],
};

const ServiceProcessStep = () => {
  return (
    <div>
      <StepCard data={serviceProcessData} />
    </div>
  );
};

export default ServiceProcessStep;
