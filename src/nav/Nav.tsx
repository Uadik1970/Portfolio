import React from 'react'
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.Nav}>
            <a href="Главная">Главная</a>
            <a href="Скилы">Скилы</a>
            <a href="Проекты">Проекты</a>
            <a href="Контакты">Контакты</a>
        </div>
    )
}
