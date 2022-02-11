import React from 'react'
import Styles from './SearchBar.module.css'


export const SearchBar = () => {
    return (
        <div className={Styles.container}>
            <form>
                <input type="text" />
                <input type="submit" value="Buscar" />
            </form>
        </div>
    )
}
