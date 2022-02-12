import { types } from "../types/types";


const initialState = {
    count: 0,
    pages: 1,
    prev: null,
    pagesViewed: [],
    selected: 0,
    actualPage: 1,
    characters: {},
    search: ''

}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.saveCharacters:
            return {
                ...state,
                characters: { 1: action.payload.results },
                pagesViewed: [...state.pagesViewed, action.payload.page],
                actualPage: 1,
                search: action.payload.busqueda,
                pagesViewed: []
            }
        case types.saveMoreCharacters:
            return {
                ...state,
                // characters: [...state.characters.slice(0, action.payload.page - 1), action.payload.results, ...state.characters.slice(action.payload.page - 1)],
                characters: { ...state.characters, [action.payload.page]: action.payload.results },
                pagesViewed: [...state.pagesViewed, action.payload.page]
            }
        case types.saveData:
            return {
                ...state,
                count: action.payload.count,
                pages: action.payload.pages
            }
        case types.selectCharacter:
            return {
                ...state,
                selected: action.payload
            }
        case types.selectPage:
            return {
                ...state,
                actualPage: action.payload
            }
        default:
            return state;
    }
}