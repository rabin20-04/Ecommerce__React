import axios from "axios";
import Config from "../config/config";

const getProducts = async () => {
  const response = await axios.get(`${Config.baseApiUrl}/api/products`);

  return response;
};
export { getProducts };
