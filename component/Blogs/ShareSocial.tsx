import Link from "next/link";
import React from "react";

const ShareSocial = () => {
  return (
    <div className="mb-5 flex justify-center items-center gap-2.5">
      <p className="text-[#696a75] text-xs">Share On</p>
      <Link
        href=""
        className="text-[#5856d6] hover:text-white hover:bg-[#5856d6] w-6 h-6 border-2 rounded-full border-[#d5d5d5]/40 hover:border-[#5856d6] p-4 flex justify-center items-center transition duration-300"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
      <Link
        href=""
        className="text-[#5856d6] hover:text-white hover:bg-[#5856d6] w-6 h-6 border-2 rounded-full border-[#d5d5d5]/40 hover:border-[#5856d6] p-4 flex justify-center items-center transition duration-300"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </Link>
      <Link
        href=""
        className="text-[#5856d6] hover:text-white hover:bg-[#5856d6] w-6 h-6 border-2 rounded-full border-[#d5d5d5]/40 hover:border-[#5856d6] p-4 flex justify-center items-center transition duration-300"
      >
        <i className="fa-brands fa-twitter"></i>
      </Link>
      <Link
        href=""
        className="text-[#5856d6] hover:text-white hover:bg-[#5856d6] w-6 h-6 border-2 rounded-full border-[#d5d5d5]/40 hover:border-[#5856d6] p-4 flex justify-center items-center transition duration-300"
      >
        <i className="fa-brands fa-instagram"></i>
      </Link>
    </div>
  );
};

export default ShareSocial;
