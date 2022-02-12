import React from 'react'
import { useSelector } from 'react-redux'
import Styles from './SerieNumbers.module.css'


export const SerieNumbers = () => {

    const { episodes, locations, characters } = useSelector(store => store.in)

    return (
        <div className={Styles.container}>
            <div className={Styles.options}>
                <div>
                    La serie en numeros:
                </div>
                <div>
                    ({episodes}) Número de episodios
                </div>
                <div>
                    ({locations}) Número de locations
                </div>
                <div>
                    ({characters}) Número de personajes
                </div>
            </div>
        </div>
    )
}
