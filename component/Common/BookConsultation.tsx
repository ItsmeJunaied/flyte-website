import Link from "next/link";
import React from "react";

const BookConsultation = () => {
  return (
    <div className="md:h-[170px] bg-[#5856d6]">
      <div className="container md:flex justify-between items-center pt-3">
        <div className="space-y-2">
          <h2 className="text-[#f7f7f7] text-2xl md:text-3xl font-bold">Build Your Dream Team</h2>
          <p className="text-[#f7f7f7] text-base">Access top talent and scale your business effortlessly.</p>
          <div className="pt-2">
            <Link
              href="hire/application-form"
              className="px-6 py-2.5 text-sm font-semibold bg-white hover:bg-black hover:text-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)]"
            >
              Build Your Team Now
            </Link>
          </div>
        </div>
        <img
          className="md:w-[392px] md:h-[165px]"
          src="https://i.ibb.co.com/C5H9tGPf/dream-team-photo.webp"
          alt="Build Your Dream Team image"
        />
      </div>
    </div>
  );
};

export default BookConsultation;
