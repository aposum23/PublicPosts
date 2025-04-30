import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
});

export default instance;