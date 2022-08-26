export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        value: data,
    };
};

export const removeProduct = (data) => {
    return {
        type: REMOVE_FROM_CART,
        value: data,
    };
};
