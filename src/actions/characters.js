import { types } from '../types/types'

export const loadCharacters = (page = 1) => {

    return async (dispatch) => {
        try {
            const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const body = await resp.json();
            console.log("BODY", body)
            dispatch(saveCharacters({ ...body, page }))
            if (page === 1) dispatch(saveData(body))
            if (page === 1) dispatch(selectCharacter(body.results[0]))
        } catch (error) {
            console.log(error)
        }
    }

}

const saveCharacters = (data) => ({
    type: types.saveCharacters,
    payload: data
})

const saveData = (data) => ({
    type: types.saveData,
    payload: data.info
})

export const selectCharacter = (data) => ({
    type: types.selectCharacter,
    payload: data
})