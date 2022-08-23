import { useState } from 'react';
import api from '../api';

export const useProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const getAllProduct = async (page, limit, sortBy, order) => {
        try {
            setIsLoading(true);
            const result = await api.getAll(page, limit, sortBy, order);
            setData(result.data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return [isLoading, data, getAllProduct];
};

export const useDetailProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const getProductById = async (id) => {
        try {
            setIsLoading(true);
            const result = await api.getById(id);
            setData(result.data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return [isLoading, data, getProductById];
};
