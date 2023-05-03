import React, { FC } from 'react'
import s from './Title.module.css'

type TitlePropsType = {
    title: string
}

export const Title: FC<TitlePropsType> = ({ title }) => {
    return (
        <div className={s.tltle}>
            <h2>{title}</h2>
        </div>

    )
}
