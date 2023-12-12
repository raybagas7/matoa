import axios from "axios";
import { AllProductData } from "../Interfaces/Product";

export const postProductData = async (
  productData: AllProductData,
  id: string,
) => {
  try {
    const response = await axios.post("http://localhost:3000/products", {
      id,
      ...productData,
    });
    return response.status;
  } catch (error) {
    throw error;
  }
};
