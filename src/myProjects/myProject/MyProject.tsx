import React from 'react'
import s from './MyProject.module.css'
import container from '../common/styles/Container.module.css'


export const MyProject = () => {
    return (
        <div className={s.myProject}>
            <div className={s.projectImage}>
                <button>Open</button>
            </div>
            <h3>Project name</h3>
            <span>Description</span>
        </div>
    )
}
