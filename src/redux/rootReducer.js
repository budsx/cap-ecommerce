import { combineReducers } from 'redux';
import productReducer from './product/reducer';

const rootReducer = combineReducers({
    productOrder: productReducer,
});

export default rootReducer;
