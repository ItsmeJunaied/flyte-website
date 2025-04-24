import React from "react";

type AchievementProps = {
  id: number;
  icon_class: string;
  impactful_title: string;
  short_description: string;
  impactful_image: string;
};

const KeyAchievement: React.FC<{ data: AchievementProps[]; title:string }> = ({ data, title }) => {
  return (
    <div className="container py-5 lg:py-10">
      <div className="flex flex-col items-center mb-5 lg:mb-10">
        <h4 className="text-[#6e51e0] text-xs text-center font-medium mb-3">Impactful Results</h4>
        <h2 className="lg:w-[600px] text-center text-[#060b13] text-xl lg:text-3xl font-semibold">
          Key Achievements of {title}
        </h2>
      </div>

      <div>
        {data.map((achievement, index) => (
          <div
            key={index}
            className={`flex  justify-center gap-3 lg:gap-8 mb-8 last:mb-0 ${
              index % 2 === 0 ? "flex-col-reverse lg:flex-row" : "flex-col-reverse lg:flex-row-reverse"
            }`}
          >
            <div className="p-1 bg-white rounded-xl shadow-[0px_8px_40px_0px_rgba(6,11,19,0.04)] overflow-hidden">
              <div className="p-5 h-[300px] lg:h-full lg:p-10 rounded-xl border-[.5px]">
                <div className="flex gap-4 mb-3 lg:mb-5">
                  <i
                    className={`text-xl text-[#6E51E0] border p-2 rounded-full fa-solid ${achievement?.icon_class}`}
                  ></i>
                  <span className="text-[#060b13] text-xl font-semibold">{achievement?.impactful_title}</span>
                </div>
                <p className="w-full lg:w-[500.08px] h-[95px] overflow-hidden text-[#363d4f] line-clamp-4">
                  {achievement?.short_description}
                </p>
              </div>
            </div>
            <div className="p-1 bg-white rounded-xl">
              <img
                className="w-full lg:w-[280px] sm:h-[320px] lg:h-[240px] object-cover border-[.5px] rounded-xl"
                src={achievement?.impactful_image}
                alt={achievement?.impactful_title + "-image"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyAchievement;