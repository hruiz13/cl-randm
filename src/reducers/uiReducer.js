import { types } from "../types/types";


const initialState = {
    error: '',
    loading: true,
    modal: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.modalError:
            return {
                ...state,
                error: action.payload
            }
        case types.loading:
            return {
                ...state,
                loading: action.payload
            }
        case types.modalState:
            return {
                ...state,
                modal: action.payload
            }
        default:
            return state;
    }
}