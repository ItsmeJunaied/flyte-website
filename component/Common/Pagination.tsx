import { FC, useRef } from "react";

interface PaginationProps {
  current_page: number;
  last_page: number;
  onPageChange: (page: number) => void;
  visibleRange?: number;
  isLoading?: boolean;
}

const Pagination: FC<PaginationProps> = ({
  current_page,
  last_page,
  onPageChange,
  visibleRange = 2,
  isLoading = false,
}) => {
  const userInteracted = useRef(false);

  // Handle scroll with conditional offset - ONLY for pagination changes
  const handlePageChangeWithScroll = (newPage: number) => {
    userInteracted.current = true;
    onPageChange(newPage);

    // Add a small delay to allow the data to load before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: 850, // Fixed scroll position for pagination
        behavior: "smooth",
      });
    }, 100);
  };

  // Don't render if there's only one page
  if (last_page <= 1) return null;

  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pages = [];
    const leftBound = Math.max(2, current_page - visibleRange);
    const rightBound = Math.min(last_page - 1, current_page + visibleRange);

    // Always add first page
    pages.push(1);

    // Add ellipsis if needed after first page
    if (leftBound > 2) {
      pages.push("...");
    }

    // Add middle range pages
    for (let i = leftBound; i <= rightBound; i++) {
      pages.push(i);
    }

    // Add ellipsis if needed before last page
    if (rightBound < last_page - 1) {
      pages.push("...");
    }

    // Always add last page if different from first
    if (last_page > 1) {
      pages.push(last_page);
    }

    return pages;
  };

  // Handler for previous button
  const handlePrevious = () => {
    if (current_page > 1) {
      handlePageChangeWithScroll(current_page - 1);
    }
  };

  // Handler for next button
  const handleNext = () => {
    if (current_page < last_page) {
      handlePageChangeWithScroll(current_page + 1);
    }
  };

  // Handler for page number clicks
  const handlePageClick = (page: number) => {
    if (page !== current_page) {
      handlePageChangeWithScroll(page);
    }
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav className="flex items-center justify-center gap-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={current_page === 1 || isLoading}
        className={`px-2.5 py-2 text-sm rounded-md ${
          current_page === 1 || isLoading
            ? "text-[#cccccc] cursor-not-allowed"
            : "text-[#333333] hover:text-blue-900 transition-colors"
        }`}
        aria-label="Previous page"
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-[5px]">
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageClick(page)}
            disabled={page === "..." || isLoading || page === current_page}
            className={`w-8 h-8 rounded-md flex items-center justify-center border ${
              page === current_page
                ? "bg-[#2f80ed] text-white font-medium"
                : page === "..."
                ? "pointer-events-none"
                : "text-black hover:bg-gray-300 transition-colors duration-500"
            }`}
            aria-current={page === current_page ? "page" : undefined}
            aria-label={page === "..." ? "Ellipsis" : `Go to page ${page}`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={current_page === last_page || isLoading}
        className={`px-2.5 py-2 text-sm rounded-md ${
          current_page === last_page || isLoading
            ? "text-[#cccccc] cursor-not-allowed"
            : "text-[#333333] hover:text-blue-900 transition-colors"
        }`}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
