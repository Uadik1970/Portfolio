import React from 'react'
import s from './Main.module.css'
import container from '../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={container.container}>
                <div className={s.greetings}>
                    <span>Hi There</span>
                    <h1>I am Vadim Timofeev</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={s.photo}>
                </div>
            </div>
        </div>
    )
}
