import React from 'react'
import container from '../common/styles/Container.module.css'
import s from './MyProjects.module.css'
import { MyProject } from './myProject/MyProject'
import { Title } from '../components/title/Title'
import socialNetworkImg from '../assets/Images/slide-0.jpg'
import counterImg from '../assets/Images/Screenshot_3.png'

const Fade = require("react-reveal/Fade")

export const MyProjects = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`
    }
    const counter = {
        backgroundImage: `url(${counterImg})`
    }

    return (
        <div id='projects' className={s.MyProjectsBlock}>
            <Fade>
                <div className={`${container.container} ${s.myProjectsContainer}`}>
                    <Title title='My projects' />
                    <div className={s.myProjects}>
                        <MyProject
                            style={socialNetwork}
                            title='Social Network'
                            dexcription='Technology stack: TypeScript, React, Redux'
                        />
                        <MyProject
                            style={counter}
                            title='Counter'
                            dexcription='Technology stack: TypeScript, React, Redux'
                        />
                    </div>
                </div>
            </Fade>
        </div>
    )
}
