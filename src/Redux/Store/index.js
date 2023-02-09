import { combineReducers, createStore } from "redux";
import cartReducer from '../Reducer'

const createRootReducer = combineReducers({
        cartReducer: cartReducer,
    });


const store = createStore(createRootReducer);

export default store;