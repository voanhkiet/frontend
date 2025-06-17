import axios from "axios";

const API_URL = "https://backend-e0sb.onrender.com";

export const getPaintings = async () => {
    const response = await axios.get(`${API_URL}/paintings`);
    return response.data;
};