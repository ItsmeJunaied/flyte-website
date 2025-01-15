import React from "react";

const BookConsultation = () => {
  return (
    <div className="h-[165px] bg-[#5856d6]">
      <div className="container flex justify-between items-center">
        <div className="space-y-2">
          <h2 className="text-[#f7f7f7] text-3xl font-bold">Build Your Dream Team</h2>
          <p className="text-[#f7f7f7] text-base">Access top talent and scale your business effortlessly.</p>
          <button className="px-6 py-2.5 text-sm font-semibold bg-white hover:bg-black hover:text-white rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)]">
            Build Your Team Now
          </button>
        </div>
        <img className="w-[392px] h-[165px]" src="https://i.ibb.co.com/JRdGDxt/dream-team-photo.png" />
      </div>
    </div>
  );
};

export default BookConsultation;
