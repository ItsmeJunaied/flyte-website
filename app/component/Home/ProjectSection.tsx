import React from "react";
import Title from "../Common/Title";

// Type Alias for Project Data
type ProjectData = {
  logo: string;
  tags: string[];
  title: string;
  description: string;
  testimonial: {
    name: string;
    role: string;
    profileImage: string;
  };
  features: string[];
  mainImage: string;
  button: string;
};

type ProjectSectionProps = {
  projectData: ProjectData[];
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ projectData }) => {
  const headerTitle: string = "Featured Case Studies";

  return (
    <div>
      <div className="w-full flex justify-center text-center">
        <Title title={headerTitle} />
      </div>

      <div className="  flex flex-col justify-center items-center gap-5 mx-44">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="w-full pt-8 pb-16 bg-[#65308c] rounded-[20px] flex-col justify-start items-center inline-flex"
          >
            <div className="self-stretch justify-center items-center gap-16 flex flex-col-reverse lg:flex-row px-16 lg:px-28">
              {/* Left Section */}
              <div className="w-full lg:w-1/2 flex-col justify-center items-start gap-6 inline-flex">
                <div className="w-full h-[43.84px] justify-center lg:justify-start items-center inline-flex overflow-hidden">
                  <img src={project.logo} alt="Logo" />
                </div>
                <div className="w-full justify-center items-center lg:justify-start lg:items-start gap-4 inline-flex">
                  {project.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-[#94be07] rounded-[10px] justify-center items-center gap-2.5 flex"
                    >
                      <div className="text-white text-xs font-bold">{tag}</div>
                    </div>
                  ))}
                </div>
                <div className="text-white text-sm lg:text-xl font-bold w-full flex justify-center lg:justify-start">
                  {project.title}
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-white text-sm font-semibold hidden lg:flex">
                    {project.description}
                  </div>
                  <div className="justify-center items-center gap-2.5 lg:inline-flex hidden">
                    <img
                      className="w-10 h-10 relative rounded-[30px]"
                      src={project.testimonial.profileImage}
                      alt="Profile"
                    />
                    <div className="flex-col justify-center items-start inline-flex">
                      <div className="text-white text-xs font-medium">
                        {project.testimonial.name}
                      </div>
                      <div className="text-white text-[10px] font-normal">
                        {project.testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="w-full justify-center lg:justify-start items-start mt-0 flex h-fit">
                    <button className="px-6 py-2.5 bg-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex">
                      <div className="text-[#191919] text-sm font-semibold">
                        {project.button}
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-1/2 flex flex-col-reverse gap-2 items-center justify-start">
                <div className="px-3 lg:px-6 hidden lg:flex flex-wrap justify-start items-center gap-6 overflow-hidden">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="px-6 py-2.5 border-2 rounded-lg flex justify-center items-center"
                    >
                      <h1 className="text-white text-xs font-semibold leading-normal">
                        {feature}
                      </h1>
                    </div>
                  ))}
                </div>
                <img
                  className="w-[250px] lg:w-[500px] lg:h-[375px] h-[230px] relative"
                  src={project.mainImage}
                  alt="Main"
                />
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ProjectSection;
