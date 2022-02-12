import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPage } from '../../actions/characters';
import Styles from './Pagination.module.css'

export const Pagination = () => {
    const [startPages, setStartPages] = useState([])
    const [lastPages, setLastPages] = useState([])
    const [centerPages, setCenterPages] = useState([])

    const { pages, actualPage, count } = useSelector(store => store.ch)
    console.log("Pages", pages, actualPage)
    const dispatch = useDispatch()

    useEffect(() => {
        if (pages >= 3) {
            setStartPages([1, 2, 3])
        } else if (pages === 2) {
            setStartPages([1, 2])
        } else {
            setStartPages([1])
        }
        if (pages > 6) {
            setLastPages([pages - 3, pages - 2, pages - 1])
        } else {
            setLastPages([])
        }
        if (actualPage >= 1 && actualPage <= pages - 4) setCenterPages([actualPage - 2, actualPage - 1, actualPage, actualPage + 1, actualPage + 2])
    }, [actualPage, pages])

    const handlePageClick = (page) => {
        if (page > pages) return
        if (page === 0) return
        dispatch(selectPage(page))
    };


    if (!pages) return null
    if (pages === 1) return null

    return (
        <div className={Styles.pagContainer}>
            <div className={Styles.pagNumbersContainer}>
                <div className={`${Styles.pag}`} onClick={() => handlePageClick(actualPage - 1)}>
                    Anterior
                </div>
                {
                    startPages?.map(start => {
                        return (
                            <div className={`${Styles.numbers} ${start === actualPage && Styles.active}`} key={start + "s"} onClick={() => handlePageClick(start)}>
                                {start}
                            </div>
                        )
                    })
                }
                {
                    ![1, 2, 3].includes(actualPage) && pages > 1 &&
                    <div className={`${Styles.numbers}`}>...</div>
                }
                {
                    centerPages.filter(c => ![-1, 0, 1, 2, 3, pages - 3, pages - 2, pages - 1, pages].includes(c)).map(center => {
                        return (
                            <div key={center + "c"} className={`${Styles.numbers}  ${center === actualPage && Styles.active}`} onClick={() => handlePageClick(center)}>{center}</div>
                        )
                    })
                }
                {
                    ![pages - 3, pages - 2, pages - 1, pages].includes(actualPage) && pages > 1 &&
                    <div className={`${Styles.numbers}`}>...</div>
                }
                {
                    lastPages?.map(end => {
                        return (
                            <div className={`${Styles.numbers}  ${end === actualPage && Styles.active}`} key={end + "e"} onClick={() => handlePageClick(end)}>
                                {end}
                            </div>
                        )
                    })
                }
                <div className={`${Styles.pag}`} onClick={() => handlePageClick(actualPage + 1)}>
                    Siguiente
                </div>
            </div>
        </div>
    )
}
