import React from 'react';
import Subtitle from '../Common/Subtitle';

const Corevalues = () => {

  const subtitle: string = 'Core Values'
  return (
    <div className=' container py-16'>
      <Subtitle Subtitle={subtitle} />

      <div className=' flex flex-col lg:flex-row gap-5 lg:px-0 px-8'>
        <div className="w-full h-[330px]  bg-btnColor rounded-xl flex-col justify-center items-center gap-8 inline-flex">
          <div className="self-stretch h-7 text-center text-white text-2xl font-bold font-['Open Sans']">Our Approach</div>
          <div className="self-stretch h-[23px] text-center text-white text-xl font-bold font-['Open Sans']">Empowering Businesses with Innovation</div>
          <div className="self-stretch text-center text-white text-sm font-normal font-['Open Sans'] leading-tight">We deliver intuitive, data-driven solutions that simplify processes and improve productivity across industries. By focusing on cutting-edge technologies, we <br />ensure seamless management, collaboration, and growth for your business.</div>
        </div>

        <div className="w-full h-[330px] p-8 bg-btnColor rounded-xl flex-col justify-center items-center gap-8 inline-flex">
          <div className="self-stretch h-7 text-center text-white text-2xl font-bold font-['Open Sans']">Our Approach</div>
          <div className="self-stretch h-[23px] text-center text-white text-xl font-bold font-['Open Sans']">Empowering Businesses with Innovation</div>
          <div className="self-stretch text-center text-white text-sm font-normal font-['Open Sans'] leading-tight">We deliver intuitive, data-driven solutions that simplify processes and improve productivity across industries. By focusing on cutting-edge technologies, we <br />ensure seamless management, collaboration, and growth for your business.</div>
        </div>
      </div>
    </div>
  );
};

export default Corevalues;