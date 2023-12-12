import { useEffect, useState } from "react";
import TableList from "../../Components/ProductPage/ProductListComponent/TableList";
import { AllProductData } from "../../Interfaces/Product";
import { getProducts } from "../../utils/getProducts";
import Button from "../../Components/Custom/Button";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../utils/deleteProduct";

const ProductList = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState<AllProductData[]>();
  const [listDataSorted, setListDataSorted] = useState<AllProductData[]>();
  const [showSort, setShowSort] = useState<boolean>(false);
  const [ascending, setAscending] = useState<boolean>(true);

  const deleteRow = async (id: string) => {
    if (listData) {
      setListData((prev) => prev?.filter((v) => v.id !== id));
    }
    if (listDataSorted) {
      setListDataSorted((prev) => prev?.filter((v) => v.id !== id));
    }
    const response = await deleteProduct(id);
    console.log(response);
  };
  const toggleSortShow = () => {
    setShowSort(!showSort);
  };

  const toggleAscDesc = () => {
    setAscending(!ascending);
    const realTimeState = !ascending;
    if (listData) {
      const temp = [...listData];
      const sortedData = temp.sort((a, b) => {
        if (a.id && b.id) {
          if (realTimeState) {
            return a.id.localeCompare(b.id);
          } else {
            return b.id.localeCompare(a.id);
          }
        }
        return 0;
      });
      setListDataSorted([...sortedData]);
    }
  };

  const filterById = () => {
    if (showSort === false) {
      if (listData) {
        const temp = [...listData];
        const sortedData = temp.sort((a, b) => {
          if (a["id"] && b["id"]) {
            if (ascending) {
              return a["id"].localeCompare(b["id"]);
            } else {
              return b["id"].localeCompare(a["id"]);
            }
          }
          return 0;
        });
        setListDataSorted([...sortedData]);
        toggleSortShow();
      }
    } else {
      toggleSortShow();
    }
  };

  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      setListData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setListData([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!listData) {
    return null;
  }

  return (
    <div className={`ml-[22vw] h-[100vh] w-[78vw] bg-[#F7F6F4] p-[50px]`}>
      <div className="mb-2 flex justify-between">
        <h1 className="text-[24px] font-semibold">PRODUCT LIST</h1>
        <div className="space-x-5">
          <Button
            onClick={() => navigate("/admin/product/add")}
            children="Add Product"
            name="add-product"
          ></Button>
          <input className="h-full" />
        </div>
      </div>
      <TableList
        filterById={filterById}
        listData={listData}
        listDataSorted={listDataSorted}
        toggleAscDesc={toggleAscDesc}
        showSort={showSort}
        ascending={ascending}
        deleteRow={deleteRow}
      />
    </div>
  );
};

export default ProductList;
