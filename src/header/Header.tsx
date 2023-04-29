import React from 'react'
import s from './Header.module.css'
import { Nav } from '../nav/Nav'

export const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.container}>
                <Nav />
            </div>
        </div>
    )
}
