import { types } from '../types/types'
import { modalError, modalStatus } from './ui';

export const loadCharacters = (page = 1, busqueda = '') => {

    return async (dispatch) => {
        try {
            let resp;
            if (!busqueda) {
                resp = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            } else {
                resp = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${busqueda}`);
            }
            const body = await resp.json();

            if (body.error === "There is nothing here") {
                dispatch(modalStatus(true))
                dispatch(modalError("No se ha encontrado ningun resultado."))
                return
            }
            if (page === 1) {
                dispatch(saveCharacters({ ...body, page, busqueda }))
            } else {
                dispatch(saveMoreCharacters({ ...body, page, busqueda }))
            }
            if (page === 1) dispatch(saveData(body))
            if (page === 1) dispatch(selectCharacter(body.results[0]))
        } catch (error) {
            console.log(error)
            dispatch(modalStatus(true))
            dispatch(modalError("Por favor intenta nuevamente mas tarde!"))

        }
    }

}

//Character general list
const saveCharacters = (data) => ({
    type: types.saveCharacters,
    payload: data
})
const saveMoreCharacters = (data) => ({
    type: types.saveMoreCharacters,
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

export const selectPage = (data) => ({
    type: types.selectPage,
    payload: data
})