import React from 'react';

type ProjectData = {
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
  
  type ProjectCardsProps = {
    projectData: ProjectData[];
  };

const ProjectCardsMobile:React.FC<ProjectCardsProps> = ({ projectData })=> {
    return (
        <div className="flex lg:hidden flex-col items-center gap-4 mt-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] w-full max-w-[1400px] rounded-[20px] flex flex-col justify-center items-center gap-4 p-6 opacity-90 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-full h-[300px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-row flex-wrap gap-3 mt-2">
              {project.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 lg:px-5 lg:py-3 text-[12px]  rounded-3xl text-white bg-[#313131] hover:bg-[#9FE870] hover:text-black"
                >
                  {tag}
                </div>
              ))}
            </div>
            <h1 className=" w-full flex justify-start text-white text-2xl  text-start mt-2">
              {project.title}
            </h1>
          </div>
        ))}
      </div>
    );
};

export default ProjectCardsMobile;