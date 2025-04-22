"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ShareSocial = () => {
  const domain = "https://fsl.flytesolutions.com";
  const pathname = usePathname();
  const currentUrl = encodeURIComponent(domain + pathname);

  return (
    <div className="mb-5 flex justify-center items-center gap-2.5">
      <p className="text-[#696a75] text-xs">Share On</p>

      {/* LinkedIn */}
      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5856d6] hover:text-white hover:bg-[#5856d6] w-6 h-6 border-2 rounded-full border-[#d5d5d5]/40 hover:border-[#5856d6] p-4 flex justify-center items-center transition duration-300"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>

      {/* Facebook */}
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5856d6] hover:text-white hover:bg-[#5856d6] w-6 h-6 border-2 rounded-full border-[#d5d5d5]/40 hover:border-[#5856d6] p-4 flex justify-center items-center transition duration-300"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </Link>

      {/* Twitter */}
      <Link
        href={`https://twitter.com/intent/tweet?url=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5856d6] hover:text-white hover:bg-[#5856d6] w-6 h-6 border-2 rounded-full border-[#d5d5d5]/40 hover:border-[#5856d6] p-4 flex justify-center items-center transition duration-300"
      >
        <i className="fa-brands fa-twitter"></i>
      </Link>

      {/* Instagram */}
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5856d6] hover:text-white hover:bg-[#5856d6] w-6 h-6 border-2 rounded-full border-[#d5d5d5]/40 hover:border-[#5856d6] p-4 flex justify-center items-center transition duration-300"
      >
        <i className="fa-brands fa-instagram"></i>
      </Link>
    </div>
  );
};

export default ShareSocial;
