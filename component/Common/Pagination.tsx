import React from "react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  total: number;
  perPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  setCurrentPage, 
  total, 
  perPage, 
}) => {
  const totalPages = Math.ceil(total / perPage);

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 850, behavior: "smooth" });
    }, 100); // Small delay to ensure smooth transition
  };
  

   const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop()
    }
  };

  // Handle Next Button Click
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop()
    }
  };

  return (
    <div className="py-8 border-b">
    {/* Next and Previous Buttons */}
    <div className="flex justify-center gap-2">
      {/* previous button  */}
      <button
        onClick={handlePrevious}
        className={`text-xs lg:text-sm w-10 h-10 text-white bgGradientNevyBlue rounded-full ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-less-than"></i>
      </button>

      <span className="px-4 py-2 text-sm font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      {/* next button  */}
      <button
        onClick={handleNext}
        className={`text-xs lg:text-sm w-10 h-10 text-white bgGradientNevyBlue rounded-full ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-blue-600"
        }`}
        disabled={currentPage === totalPages}
      >
        <i className="fa-solid fa-greater-than"></i>
      </button>
    </div>
  </div>
  );
};

export default Pagination;
