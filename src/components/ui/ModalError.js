import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalStatus } from '../../actions/ui'
import Styles from './ModalError.module.css'


export const ModalError = () => {

    const dispatch = useDispatch()

    const { modal, error } = useSelector(store => store.ui)

    const handleClose = () => {
        dispatch(modalStatus(false))
    }

    if (modal) {

        return (
            <div className={Styles.errorContainer}>
                <div className={Styles.modalContainer}>
                    <div className={Styles.modalHeader}>
                        UPS!
                    </div>
                    <div className={Styles.modalBody}>
                        {
                            error
                                ?
                                <span>
                                    {error}
                                </span>
                                :
                                <span>
                                    No se pudo completar su peticion! por favor intente nuevamente mas tarde.
                                </span>
                        }
                    </div>
                    <div className={Styles.modalClose} onClick={handleClose}>
                        ×
                    </div>
                </div>
            </div>
        )
    }

    return null
}
