import React from 'react'
import container from '../common/styles/Container.module.css'
import s from './Skills.module.css'
import { Skill } from './skill/Skill'
import { Title } from '../components/title/Title'


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${container.container} ${s.skillsContainer}`}>
                <Title title='Skills' />
                <div className={s.skills}>
                    <Skill title="React" desciption="descid ddddddd dddddddddddd ddddddd dddddddd dddd dddddddption" />
                    <Skill title="React" desciption="desciddd dddddd ddddddddd ddddddd dddd dddd dption" />
                    <Skill title="React" desciption="desciddddddd dddddddd dddddddddddd dddddd dddp tion" />
                </div>
            </div>
        </div>
    )
}
