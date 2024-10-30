import axios from 'axios';

const getProducts = async () => {
    try {
        const response = await axios.get(
            'https://fakestoreapi.com/products?limit=6'
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
const getProductById = async (id) => {
    try {
        const response = await axios.get(
            `https://fakestoreapi.com/products/${id}`
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export { getProducts, getProductById };
