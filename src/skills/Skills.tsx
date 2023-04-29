import React from 'react'
import s from './Skills.module.css'
import container from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill'


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${container.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title="React" desciption="descid ddddddd dddddddddddd ddddddd dddddddd dddd dddddddption" />
                    <Skill title="React" desciption="desciddd dddddd ddddddddd ddddddd dddd dddd dption" />
                    <Skill title="React" desciption="desciddddddd dddddddd dddddddddddd dddddd dddp tion" />
                </div>
            </div>
        </div>
    )
}
