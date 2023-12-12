interface PaginatiionProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatiionProps) => {
  const numbersOfPage = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div>
      <ul className="pagination mt-5 flex justify-center gap-2 text-sm">
        <li className="rounded-lg` flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-white transition-colors hover:bg-primary hover:text-white hover:transition-colors">
          {"<"}
        </li>
        {numbersOfPage.map((page) => (
          <li
            key={page}
            className={`${
              page === currentPage
                ? "bg-primary text-white"
                : "bg-white transition-colors hover:bg-primary hover:text-white hover:transition-colors"
            } flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
        <li className="rounded-lg` flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-white transition-colors hover:bg-primary hover:text-white hover:transition-colors">
          {">"}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
