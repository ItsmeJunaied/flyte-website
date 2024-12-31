/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function ScrollSection() {
    const projectData=[
        {
          "title": "Marketing Material Design",
          "description": "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
          "image": "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
          "tags": ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"]
        },
        {
          "title": "Marketing Material Design",
          "description": "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
          "image": "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
          "tags": ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"]
        },
        {
          "title": "Marketing Material Design",
          "description": "Effective marketing materials are key to capturing attention. We design assets that reflect your brand while drawing your audience in with compelling visuals.",
          "image": "https://cdn.prod.website-files.com/643f7373d3f6653157617339/66e2f5e167d7e3c31600a32a_Marketing%20image-p-800.png",
          "tags": ["Digital ads", "Marketing materials", "Email templates", "Motion graphics", "Social media design"]
        },
      ]
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-[#1A1A1A] w-[1295px] h-[550px] rounded-xl flex flex-row justify-center items-center gap-10 p-6"
          >
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-[585px] h-[500px] rounded-xl"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-8 text-start">
              <h1 className="text-white text-4xl text-start">
                {project.title}
              </h1>
              <p className="text-white text-base">{project.description}</p>
              <div className="flex flex-row flex-wrap gap-3 mt-5">
                {project.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-3 rounded-3xl bg-[#313131]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;