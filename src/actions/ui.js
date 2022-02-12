import { types } from '../types/types'

export const modalStatus = (data) => ({
    type: types.modalState,
    payload: data
})
export const modalError = (data) => ({
    type: types.modalError,
    payload: data
})