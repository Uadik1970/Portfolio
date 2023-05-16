import React, { useState } from 'react'
import container from '../common/styles/Container.module.css'
import s from './Header.module.css'

// последний импорт перетирает верхние

import { Nav } from '../nav/Nav'


export const Header = () => {

    const [viewmode, setViewMode] = useState(false)
    const setViewModeHandler = () => {
        alert('hi')
        setViewMode(!viewmode)
    }
    return (
        <div className={s.header}>
            <div className={`${container.container} ${s.navContainer}`}>
                {/* <a href='#' className={s.logo}>Vadim.</a> */}
                {/* {viewmode} */}
                <Nav />
                <div className={s.burgerMenu} onClick={setViewModeHandler}>
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18L20 18" stroke="#ededed" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 12L20 12" stroke="#ededed" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 6L20 6" stroke="#ededed" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
