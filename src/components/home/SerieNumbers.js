import React from 'react'
import Styles from './SerieNumbers.module.css'


export const SerieNumbers = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.options}>
                <div>
                    La serie en numeros:
                </div>
                <div>
                    00 Número de episodios
                </div>
                <div>
                    00 Número de locations
                </div>
                <div>
                    00 Número de personajes
                </div>
            </div>
        </div>
    )
}
