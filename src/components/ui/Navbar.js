import React from 'react'

import renderphoto from "./img/logo.png"

import Styles from './Navbar.module.css'


export const Navbar = () => {
    return (
        <nav className={Styles.container}>
            <div className={Styles.imageContainer}>
                <img className={Styles.image} src={renderphoto} alt="Img not found" />
            </div>
        </nav>
    )
}
