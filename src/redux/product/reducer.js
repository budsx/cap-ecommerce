import { ADD_TO_CART, REMOVE_FROM_CART } from './action';

const INITIAL_STATE = {
    data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                data: [...state.data, action.value],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                data: state.data.filter((item) => item !== action.value),
            };
        default:
            return state;
    }
};

export default reducer;
