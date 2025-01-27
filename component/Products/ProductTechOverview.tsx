"use client";
import React, { useState } from "react";

const ProductTechOverview = () => {
  const [isOpen, setIsOpen] = useState(false);
  // open modal
  const openModal = () => {
    setIsOpen(true);
  };

  // close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">Technical Speciffications</h2>
          <div className="p-2 md:p-5 bg-[#f9f9f9] shadow-[0px_0px_10px_10px_rgba(227,227,227,0.25)] grid grid-cols-2 sm:grid-cols-3 items-center gap-5">
            <h4 className="col-span-1 text-[#181a2a]/80 text-xs md:text-md xl:text-base">Technology Stack</h4>
            <span className="col-span-1 md:col-span-2 flex gap-2 sm:gap-5">
              <img
                className="w-8 md:w-10 h-6 md:h-10"
                src="https://i.ibb.co.com/Wg2qfny/nodejs-svgrepo-com.png"
                alt=""
              />
              <img
                className="w-8 md:w-10 h-6 md:h-10"
                src="https://i.ibb.co.com/TBzYDqN/react-svgrepo-com.png"
                alt=""
              />
              <img
                className="w-8 md:w-10 h-6 md:h-10"
                src="https://i.ibb.co.com/q7b62X9/mongodb-svgrepo-com-1.png"
                alt=""
              />
            </span>
          </div>
          <div className="p-2 md:p-5 bg-[#f9f9f9] shadow-[0px_0px_10px_10px_rgba(227,227,227,0.25)] grid grid-cols-2 sm:grid-cols-3 items-center gap-5">
            <h4 className="col-span-1 text-[#181a2a]/80 text-xs md:text-md xl:text-base">
              Integrations Available
            </h4>
            <span className="col-span-1 md:col-span-2 flex gap-2 sm:gap-5">
              <img
                className="w-8 md:w-10 h-6 md:h-10"
                src="https://i.ibb.co.com/V2Z7rFP/apple-pay-svgrepo-com-1.png"
                alt=""
              />
              <img
                className="w-8 md:w-10 h-6 md:h-10"
                src="https://i.ibb.co.com/W3Dknxm/xero-svgrepo-com-1.png"
                alt=""
              />
              <img
                className="w-8 md:w-10 h-6 md:h-10"
                src="https://i.ibb.co.com/TDyfHzj/brand-quickbooks-svgrepo-com-1.png"
                alt=""
              />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 md:mb-3 mt-4 md:mt-5">See It in Action</h2>
          <div className="bg-black/30 relative">
            <img className="mix-blend-multiply w-full" src="https://i.ibb.co.com/nbHLb9P/Image.png" alt="" />
            <button
              onClick={openModal}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="border flex items-center justify-center gap-2.5 relative group">
                <div className="absolute inset-0 w-12 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                <span className="px-4 py-2 bg-white z-10">
                  <i className="fa-solid fa-play text-3xl"></i>
                </span>
                <span className="px-2 z-10 text-white group-hover:text-black font-bold text-nowrap">
                  {" "}
                  Watch Full Demo
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* video modal  */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100] px-5" onClick={closeModal}>
          <div className="flex justify-center items-center h-full">
            <div className="w-[800px] border h-[400px] relative">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NNsjVdx0Tsc?si=LaqXOIk0dYRp3sJm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeModal}
                className="text-red-700 hover:text-white absolute -top-4 -right-4 bg-white hover:bg-red-700 rounded-full w-8 h-8 flex justify-center items-center"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTechOverview;
