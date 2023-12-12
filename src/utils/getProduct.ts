import axios from "axios";

export const getProduct = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
