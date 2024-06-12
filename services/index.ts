import axios from "axios";

const API_URL= process.env.EXPO_PUBLIC_API_URL;

export const getOrders = async () => {
    return await axios.get(`${API_URL}/orders`);
};

