import axios from "axios";
import { AllProductData } from "../Interfaces/Product";

const api = (() => {
  const BASE_URL = "http://localhost:3000/products";

  async function getTopFour() {
    try {
      const response = await axios.get(`${BASE_URL}`);
      const products: AllProductData[] = response.data;

      products.sort((a, b) => b.discount - a.discount);

      const top4Products = products.slice(0, 4);
      return top4Products;
    } catch (error) {
      throw error;
    }
  }

  return {
    getTopFour,
  };
})();

export default api;
