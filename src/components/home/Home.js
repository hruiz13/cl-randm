import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCharacters } from '../../actions/characters'
import { Card } from '../cards/Card'
import { Detail } from '../cards/Detail'
import { Pagination } from '../ui/Pagination'
import Styles from './Home.module.css'

export const Home = () => {

    const dispatch = useDispatch();
    const { characters } = useSelector(state => state.ch)

    useEffect(() => {
        // dispatch(loadCharacters())
    }, [])

    return (
        <div className={Styles.mainContainer}>

            <div className={Styles.leftContainer}>
                {
                    characters.map(character => {
                        return (
                            <Card key={character.id} character={character} />
                        )
                    })
                }
                <Pagination />
            </div>
            <div className={Styles.rightContainer}>
                <Detail />
            </div>
        </div>
    )
}
