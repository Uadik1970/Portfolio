import React, { FC } from 'react'
import s from './MyProject.module.css'

type MyProjectPropsType = {
    title: string
    dexcription: string
    style?: any
}

export const MyProject: FC<MyProjectPropsType> = ({ title, dexcription, style }) => {
    return (
        <div className={s.myProject}>
            <div className={s.projectImage} style={style}>
                <a href="#" className={s.viewBtn}>View</a>
            </div>
            <div className={s.projectInfo}>
                <h3>{title}</h3>
                <span>{dexcription}</span>
            </div>
        </div>
    )
}
