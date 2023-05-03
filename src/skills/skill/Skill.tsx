import React, { FC } from 'react'
import s from './Skill.module.css'


type SkillPropsType = {
    title: string
    desciption: string
    icon: any
}

export const Skill: FC<SkillPropsType> = ({ title, desciption, icon }) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                {icon}
            </div>
            <h3>{title}</h3>
            <span>{desciption}</span>
        </div>
    )
}
