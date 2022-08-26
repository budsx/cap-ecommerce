import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';

function saveToLocalStorage(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}

function loadFromLocalStorage() {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
}

const presistedState = loadFromLocalStorage();
const store = createStore(rootReducer, presistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
