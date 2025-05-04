import leftPaginationIcon from "@/assets/svgs/left-pagination.svg";
import rightPaginationIcon from "@/assets/svgs/right-pagination.svg";
import Image from "next/image";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-500 hover:bg-gray-100 disabled:opacity-50"
      >
        <span>
          <Image src={leftPaginationIcon} alt="icon" />
        </span>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-md transition ${
            page === currentPage
              ? "bg-black text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-500 hover:bg-gray-100 disabled:opacity-50"
      >
        <span>
          <Image src={rightPaginationIcon} alt="icon" />
        </span>
      </button>
    </div>
  );
};

export default Pagination;
