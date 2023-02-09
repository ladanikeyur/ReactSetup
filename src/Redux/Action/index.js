import { ADD_ITEM } from "./actionType";
import store from "../Store";

const addCart = () => {
    const getstate = store.getState().cartReducer
    return {
        type: ADD_ITEM,
        payload:getstate.addCart + 2
    };
};



export { addCart };