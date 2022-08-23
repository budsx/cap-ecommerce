import axios from 'axios';

const baseURL = 'https://63043a6d761a3bce77e47ccc.mockapi.io/api/product';

const mockApi = axios.create({
    baseURL: String(baseURL),
});

export default mockApi;
