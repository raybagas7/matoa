import { useState } from "react";
import { AllProductData } from "../../../Interfaces/Product";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";

interface TableProps {
  filterById: () => void;
  listData: AllProductData[];
  listDataSorted?: AllProductData[];
  showSort: boolean;
  toggleAscDesc: () => void;
  ascending: boolean;
  deleteRow: (id: string) => void;
}

const TableList = ({
  filterById,
  listData,
  listDataSorted,
  showSort,
  toggleAscDesc,
  ascending,
  deleteRow,
}: TableProps) => {
  const itemPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const beginIndex = (currentPage - 1) * itemPerPage;
  const lastIndex = beginIndex + itemPerPage;
  let showData: AllProductData[] = [];

  if (showSort) {
    if (listDataSorted) {
      showData = listDataSorted.slice(beginIndex, lastIndex);
    }
  } else {
    showData = listData.slice(beginIndex, lastIndex);
  }

  const totalPages = Math.ceil(listData.length / itemPerPage);

  const pageChangeHandler = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-list h-full overflow-x-auto rounded-lg">
      <table className="product-list__table w-full bg-white text-left shadow">
        <thead className="text-[16px]">
          <tr>
            <th className="w-[10%] ">
              <div className="flex items-center gap-3">
                <p
                  onClick={filterById}
                  className="cursor-pointer transition-colors hover:text-primary hover:transition-colors "
                >
                  ID
                </p>
                {showSort ? (
                  ascending ? (
                    <HiSortAscending
                      onClick={toggleAscDesc}
                      className="cursor-pointer transition hover:text-primary hover:transition"
                    />
                  ) : (
                    <HiSortDescending
                      onClick={toggleAscDesc}
                      className="cursor-pointer transition hover:text-primary hover:transition"
                    />
                  )
                ) : null}
              </div>
            </th>
            <th className="w-[25%]">Name</th>
            <th className="w-[20%]">Category</th>
            <th className="w-[20%]">Price</th>
            <th className="w-[15%]">Discount</th>
            <th className="w-[10%]">Action</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {showData.map((data) => (
            <TableRow key={data.id} productData={data} deleteRow={deleteRow} />
          ))}
        </tbody>
      </table>
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={pageChangeHandler}
        />
      </div>
    </div>
  );
};

export default TableList;
