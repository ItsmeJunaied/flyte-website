'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

type CustomNavigateButtonProps = {
  btnName: string;
  textColor: string;
  textHoverColor: string;
  bgColor: string;
  bgHover: string;
};

const CustomNavigateButton: React.FC<CustomNavigateButtonProps> = ({btnName, textColor, textHoverColor, bgColor, bgHover}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/job-application-wizard');
  };

  return (
    <button 
      onClick={handleClick}
      type="button" 
      className={`px-2 md:px-8 py-1 md:py-3 text-sm rounded-md text-[${textColor}] hover:text-[${textHoverColor}] bg-[${bgColor}] hover:bg-[${bgHover}]`}>
      {btnName}
    </button>
  );
};

export default CustomNavigateButton;