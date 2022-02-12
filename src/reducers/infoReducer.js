import { types } from "../types/types";


const initialState = {
    episodes: 0,
    locations: 0,
    characters: 0
}

export const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.saveEpisodes:
            return {
                ...state,
                episodes: action.payload,
            }
        case types.saveLocations:
            return {
                ...state,
                locations: action.payload,
            }
        case types.saveNumberCharacters:
            return {
                ...state,
                characters: action.payload,
            }
        default:
            return state;
    }
}