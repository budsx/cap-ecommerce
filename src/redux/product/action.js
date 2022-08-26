export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

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
export const changeQty = (data) => {
    return {
        type: CHANGE_QUANTITY,
        value: data,
    };
};
