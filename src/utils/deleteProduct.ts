import axios from "axios";

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(`http://localhost:3000/products/${id}`);
    return response.status;
  } catch (error) {
    throw error;
  }
};
