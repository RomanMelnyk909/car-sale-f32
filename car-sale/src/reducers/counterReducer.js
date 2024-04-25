import { DECERMENT, INCERMENT, PLUS_NUMBER, RESET } from "../constants/actionsNames";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCERMENT: return { ...state, count: state.count + 1 };

        case PLUS_NUMBER: return { ...state, count: state.count + action.payload };

        default: return  state;
    }
};