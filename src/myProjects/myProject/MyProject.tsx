import React, { FC } from 'react'
import s from './MyProject.module.css'

type MyProjectPropsType = {
    title: string
    dexcription: string
}

export const MyProject: FC<MyProjectPropsType> = ({ title, dexcription }) => {
    return (
        <div className={s.myProject}>
            <div className={s.projectImage}>
                <a href="#" className={s.viewBtn}>Open</a>
            </div>
            <h3>{title}</h3>
            <span>{dexcription}</span>
        </div>
    )
}
