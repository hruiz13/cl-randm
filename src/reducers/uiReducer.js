import { types } from "../types/types";


const initialState = {
    error: false,
    loading: true
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.error:
            return {
                ...state,
                error: action.payload
            }
        case types.loading:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}