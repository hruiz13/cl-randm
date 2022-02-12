import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCharacters } from '../../actions/characters'
import { loadEpisodes, loadLocations } from '../../actions/info'
import { Card } from '../cards/Card'
import { Detail } from '../cards/Detail'
import { Pagination } from '../ui/Pagination'
import Styles from './Home.module.css'

export const Home = () => {

    const dispatch = useDispatch();
    const { characters, actualPage, pagesViewed, search } = useSelector(state => state.ch)

    useEffect(() => {
        dispatch(loadEpisodes())
        dispatch(loadLocations())
    }, [dispatch])


    useEffect(() => {
        if (!pagesViewed.includes(actualPage)) {
            dispatch(loadCharacters(actualPage, search))
        }
    }, [actualPage, dispatch])

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.leftContainer}>
                {
                    characters[actualPage]?.map(character => {
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
