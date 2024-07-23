import axios from "axios";
import {
    URL_API_CATEGORY,
    URL_API_CATEGORY_BY_PRODUCT,
    URL_API_PRODUCTS,
    URL_API_PRODUCT_SEARCH_SORT
} from './apiUrl/ApiUrl';
const ApiServices = {
    getApiProducts: async () => {
        try {
            const res = await axios.get(URL_API_PRODUCTS);
            return res.data;
        } catch (error) {
            console.log(error, "errGetProducts");
        }

    },
    getApiCategory: async () => {
        try {
            const res = await axios.get(URL_API_CATEGORY);
            return res.data;
        } catch (error) {
            console.log(error, "errGetCate");
        }

    }


}
export default ApiServices;