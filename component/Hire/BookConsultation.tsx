import React from 'react';

const BookConsultation = () => {
  return (
    <div className="mx-auto mb-20">
      <div
        className="w-full h-[180px] md:h-[226px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/bH3K5FL/Rectangle-3843-2x.png')",
        }}
      >
        {/* Content */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center gap-6 text-center text-white">
          <h2 className="max-w-[600px] text-center text-white text-base md:text-2xl font-semibold font-['Open Sans']">
          Book a consultation to discover how our team can drive your success!
          </h2>
          <button  className="h-10 px-6 py-2.5 text-[#191919] hover:text-white text-sm font-semibold font-['DM Sans'] bg-white hover:bg-[#656565] rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] transition-all duration-300 ease-in-out transform hover:scale-105">
            Book A Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;