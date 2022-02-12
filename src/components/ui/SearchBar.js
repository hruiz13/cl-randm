import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadCharacters } from '../../actions/characters'
// import { searchCharacters } from '../../actions/search'
import Styles from './SearchBar.module.css'


export const SearchBar = () => {
    const [busqueda, setBusqueda] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loadCharacters(1, busqueda))
    }

    return (
        <div className={Styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                <input type="submit" value="Buscar" />
            </form>
        </div>
    )
}
