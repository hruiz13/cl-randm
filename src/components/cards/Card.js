import React from 'react'
import { useDispatch } from 'react-redux'
import { selectCharacter } from '../../actions/characters'
import Styles from './Card.module.css'

export const Card = ({ character }) => {

  const dispatch = useDispatch()

  const handleSelect = () => {
    dispatch(selectCharacter(character))
  }

  return (
    <div className={Styles.cardContainer}>
      <div>
        <img className={Styles.char_img} src={character.image} alt={character.name} />
      </div>
      <div className={Styles.char_details}>
        <div className={Styles.char_name}>
          {character.name}
        </div>
        <div className={Styles.status}>
          {character.status === "Alive" &&
            <span className={`${Styles.char_statusIndicator} ${Styles.char_statusGreen}`}></span>
          }{
            character.status === "Dead" &&
            <span className={`${Styles.char_statusIndicator} ${Styles.char_statusRed}`}></span>
          }{
            character.status === "unknown" &&
            <span className={`${Styles.char_statusIndicator} ${Styles.char_statusYellow}`}></span>
          }
          <span>{character.status}</span>
        </div>
        <div className={Styles.status}>
          <span>{character.species}</span>
        </div>
        <div className={Styles.moreInfo}>
          <button onClick={handleSelect}>Detalle</button>
        </div>
      </div>
    </div>
  )
}
