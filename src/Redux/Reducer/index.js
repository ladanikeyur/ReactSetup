import { ADD_ITEM } from "../Action/actionType";

const initialState = {
    addCart: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                addCart: action.payload,
            };
            
        default:
            return state;
    }
};


export default cartReducer