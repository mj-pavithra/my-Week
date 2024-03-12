import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have reducers

const store = createStore(rootReducer); // Create Redux store

export default store;
