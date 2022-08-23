import mockapi from '../config/api';

const api = {
    getAll: (page = 1, limit = 10, sortBy = '', order = '') =>
        mockapi.get(
            `?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`
        ),
    getById: (id) => mockapi.get(`/${id}`),
};

export default api;
