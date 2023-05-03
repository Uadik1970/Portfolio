import React from 'react'
import container from '../common/styles/Container.module.css'
import s from './Header.module.css'
// последний импорт перетирает верхние

import { Nav } from '../nav/Nav'


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${container.container} ${s.navContainer}`}>
                <a href='#' className={s.logo}>Vadim.</a>
                <Nav />
            </div>
        </div>
    )
}
