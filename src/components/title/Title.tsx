import React, { FC } from 'react'
import s from './Title.module.css'

type TitlePropsType = {
    title: string
}

export const Title: FC<TitlePropsType> = ({ title }) => {
    return (
        <h2 className={s.tltle}>{title}</h2>
    )
}
