import { actionNames } from "../constants/actionsNames";

const initialState = {count: 0}

export const counterReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case actionNames.INCREMENT: return {...state, count: state.count + 1}

        case actionNames.DECREMENT: return {...state, count: state.count - 1}

        case actionNames.PLUS_NUMBER: return {...state, count: state.count + action.payload}

        case actionNames.RESET: return {...state, count: 0}

        default: return state
    }
}