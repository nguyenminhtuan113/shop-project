import axios from "axios";
import {
    URL_API_CATEGORY,
    URL_API_CATEGORY_BY_PRODUCT,
    URL_API_PRODUCTS,
    URL_API_PRODUCT_SEARCH_SORT
} from './apiUrl/ApiUrl';
const ApiServices = {
    getApiProducts: async (params) => {
        try {
            const products = await axios.get(URL_API_PRODUCTS, {
                params,
            });
            return products.data;
        } catch (error) {
            console.log(error, "errGetProducts");
        }

    },
    getProductById: async (id) => {
        try {
            const res = await axios.get(`${URL_API_PRODUCTS}${id}`);
            return res.data;
        } catch (error) {
            console.log(error, 'errorProductById');
        }

    },
    getApiCategory: async () => {
        try {
            const categories = await axios.get(URL_API_CATEGORY);
            return categories.data;
        } catch (error) {
            console.log(error, "errGetCate");
        }

    },
    getApiProductByCategory: async (params) => {
        try {
            const productByCategory = await axios.get(`${URL_API_CATEGORY_BY_PRODUCT}${params}`)
            return productByCategory.data;
        } catch (e) {
            console.log(e, 'productBycate')
        }

    },
    getApiProductSearchSort: async (params) => {
        try {
            const product = await axios.get(URL_API_PRODUCT_SEARCH_SORT, { params });
            return product.data;
        } catch (error) {
            console.log(error, 'search')
        }
    }



}
export default ApiServices;