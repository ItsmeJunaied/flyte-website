import React from 'react';
import Marquee from 'react-fast-marquee';

type Technology = {
  image: string;
};

type OurTechnologiesProps = {
  data: {
    technologies: Technology[];
  };
};

const OurTechnologies: React.FC<OurTechnologiesProps> = ({ data }) => {
  return (
    <div className='bg-white py-7 lg:py-10'>
      <h2 className='text-[#181a2a] text-xl lg:text-2xl text-center font-semibold mb-4 lg:mb-8'>
        Technologies We Work With
      </h2>
      <div className="container flex flex-row pt-2">
        <Marquee gradient={false} speed={100} pauseOnHover={true}>
          <div className='flex gap-10'>
            {data?.technologies?.map((item, index) => (
              <img key={index} className="w-12 h-12 rounded-xl" src={item.image} alt="Technology" />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default OurTechnologies;
