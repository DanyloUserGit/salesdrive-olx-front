import React from "react";
import { usePagination } from "@/store/usePagination";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const { page, setPage } = usePagination();

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePageClick = (p: number) => setPage(p);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-3 py-1 rounded bg-light-bg text-light-text disabled:opacity-50"
      >
        Prev
      </button>

      <button
        onClick={() => handlePageClick(page)}
        className={`px-3 py-1 rounded 
              bg-brand-blue text-white
          `}
      >
        {page}
      </button>

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-3 py-1 rounded bg-light-bg text-light-text disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
