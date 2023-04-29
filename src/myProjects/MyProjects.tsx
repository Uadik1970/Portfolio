import React from 'react'
import s from './MyProjects.module.css'
import container from '../common/styles/Container.module.css'
import { MyProject } from './myProject/MyProject'


export const MyProjects = () => {
    return (
        <div className={s.MyProjectsBlock}>
            <div className={`${container.container} ${s.myProjectsContainer}`}>
                <h2>My Projects</h2>
                <div className={s.myProjects}>
                    <MyProject />
                    <MyProject />
                    <MyProject />
                </div>
            </div>
        </div>
    )
}
