import React from "react";

// const technologies = [
//   {
//     name: "HTML",
//     image: "https://i.ibb.co.com/xqdcxQ47/angular.png",
//   },
//   {
//     name: "CSS",
//     image: "https://i.ibb.co.com/G6zLL9W/js.png",
//   },
//   {
//     name: "JavaScript",
//     image: "https://i.ibb.co.com/LXtXt8gZ/vue.png",
//   },
//   {
//     name: "React",
//     image: "https://i.ibb.co.com/B5KzsRHC/nodejs-svgrepo-com-1.png",
//   },
//   {
//     name: "Angular",
//     image: "https://i.ibb.co.com/Xkr7q6sq/spring-svgrepo-com.png",
//   },
//   {
//     name: "Vue.js",
//     image: "https://i.ibb.co.com/zVHKw760/react.png",
//   },
//   {
//     name: "Vue.js",
//     image: "https://i.ibb.co.com/39CgJymq/flutter-logo-1.png",
//   },
//   {
//     name: "Vue.js",
//     image: "https://i.ibb.co.com/1t8Hj9S8/postman-icon-svgrepo-com-1.png",
//   },
//   {
//     name: "Vue.js",
//     image: "https://i.ibb.co.com/sv1MM5p5/selenium-svgrepo-com-1.png",
//   },
//   {
//     name: "Vue.js",
//     image: "https://i.ibb.co.com/279WJYsn/docker-svgrepo-com.png",
//   },
//   {
//     name: "Vue.js",
//     image: "https://i.ibb.co.com/0RhZxWpH/azure-2-1.png",
//   },
// ];

type TechnologyProps = {
  id: number;
  name: string;
  logo: string;
};

const TechnologyStack: React.FC<{ data: TechnologyProps[] }> = ({ data }) => {
  return (
    <div className="bg-white pt-5 lg:pt-8 pb-8 lg:pb-16">
      <h2 className="text-[#181a2a] text-xl lg:text-2xl text-center font-semibold mb-5 lg:mb-6">
        Technology Stack
      </h2>
      <div className="container lg:w-[500px] mx-auto">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 ">
          {data?.map((tech, index) => (
            <div key={index}>
              <img
                className="h-8 lg:w-12 h-8 lg:h-12"
                src={tech?.logo}
                alt={tech?.name + "-logo"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
