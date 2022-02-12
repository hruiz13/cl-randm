import { types } from '../types/types'
import { modalError, modalStatus } from './ui';

export const loadEpisodes = () => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`https://rickandmortyapi.com/api/episode`);
            const body = await resp.json();
            dispatch(numberOfEpisodes(body.info.count))
        } catch (error) {
            console.log(error)
            dispatch(modalStatus(true))
            dispatch(modalError("Por favor intenta nuevamente mas tarde!"))
        }
    }
}

export const loadLocations = () => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`https://rickandmortyapi.com/api/location`);
            const body = await resp.json();
            dispatch(numberOfLocations(body.info.count))
        } catch (error) {
            console.log(error)
            dispatch(modalStatus(true))
            dispatch(modalError("Por favor intenta nuevamente mas tarde!"))
        }
    }
}

const numberOfEpisodes = (payload) => ({
    type: types.saveEpisodes,
    payload
})
const numberOfLocations = (payload) => ({
    type: types.saveLocations,
    payload
})