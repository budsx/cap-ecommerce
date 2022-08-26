import { ADD_TO_CART, CHANGE_QUANTITY, REMOVE_FROM_CART } from './action';

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
        case CHANGE_QUANTITY:
            return {
                data: state.data.map((content) =>
                    content.id === action.id
                        ? { ...content, qty: action.value }
                        : content
                ),
            };
        default:
            return state;
    }
};

export default reducer;
