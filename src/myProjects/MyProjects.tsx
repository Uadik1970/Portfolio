import React from 'react'
import container from '../common/styles/Container.module.css'
import s from './MyProjects.module.css'
import { MyProject } from './myProject/MyProject'
import { Title } from '../components/title/Title'


export const MyProjects = () => {
    return (
        <div className={s.MyProjectsBlock}>
            <div className={`${container.container} ${s.myProjectsContainer}`}>
                <Title title='My projects' />
                <div className={s.myProjects}>
                    <MyProject
                        title='React'
                        dexcription='Description Description Description'
                    />
                    <MyProject
                        title='React'
                        dexcription='Description Description Description
                    Description Description Description'
                    />
                    <MyProject
                        title='React'
                        dexcription='Description Description Description
                               Description Description Description'
                    />
                    <MyProject
                        title='React'
                        dexcription='Description Description Description
                               Description Description Description'
                    />

                </div>
            </div>
        </div>
    )
}
