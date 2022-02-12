import React from 'react'
import { useSelector } from 'react-redux'
import Styles from './Detail.module.css'

export const Detail = () => {

    const { selected } = useSelector(store => store.ch)
    const { name, image, gender, origin, location, episode } = selected;
    if (selected === 0) return <></>

    return (
        <div className={Styles.det_container}>
            <div className={Styles.det}>
                Detalle
            </div>
            <div>
                <img className={Styles.char_img} src={image} alt={name} />
            </div>
            <div className={Styles.char_name}>
                {name}
            </div>
            <div className={Styles.char_details}>
                <ul className='dashed'>
                    <li>
                        Gender: {gender}
                    </li>
                    <li>
                        Origin: {origin.name}
                    </li>
                    <li>
                        Location: {location.name}
                    </li>
                    <li>
                        Number of episodes: {episode.length}
                    </li>
                </ul>
            </div>
        </div>
    )
}
