import { RiDeleteBin3Fill, RiEdit2Fill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { AllProductData } from "../../../Interfaces/Product";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Custom/Modal";
import { formatID } from "../../../utils/currencyFormat";

interface TableRowProps {
  productData: AllProductData;
  deleteRow: (id: string) => void;
}

const TableRow = ({ productData, deleteRow }: TableRowProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const goToEditProduct = () => {
    navigate(`/admin/product/edit/${productData.id}`, {
      state: { productData },
    });
  };

  const DeleteMessage = () => {
    return (
      <p>
        {`Are you sure you want to delete `}
        <span className="font-bold">{productData.name}</span>
        {` with ID: `}
        <span className="font-bold">{productData.id}</span>
      </p>
    );
  };

  const deleteModal = () => {
    setShowModal(true);
    // ;
  };

  const deleteHandler = () => {
    deleteRow(productData.id as string);
  };

  return (
    <>
      <Modal
        show={showModal}
        title="Delete Item"
        confirm
        decline
        confirmAct={deleteHandler}
        textMessage={<DeleteMessage />}
        closeModal={setShowModal}
        animatePop
      />
      <tr>
        <td>{productData.id}</td>
        <td>{productData.name}</td>
        <td className="capitalize">{productData.category}</td>
        <td>{formatID.format(productData.price)}</td>
        <td>{productData.discount}%</td>
        <td>
          <div className="flex items-center gap-5">
            <RiEdit2Fill
              onClick={goToEditProduct}
              className="h-5 w-5 cursor-pointer transition-colors hover:text-primary hover:transition-colors"
            />
            <RiDeleteBin3Fill
              onClick={deleteModal}
              className="h-5 w-5 cursor-pointer transition-colors hover:text-primary hover:transition-colors"
            />
            <SlOptionsVertical
              onClick={() => navigate(`/admin/product/view/${productData.id}`)}
              className="h-5 w-5 cursor-pointer transition-colors hover:text-primary hover:transition-colors"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
