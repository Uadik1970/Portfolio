import React from 'react'
import s from './Footer.module.css'
import container from '../common/styles/Container.module.css'



export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${container.container} ${s.footerContainer}`}>
                <h2>Vadim Timofeev</h2>
                <div className={s.footerContacts}>
                    <div className={s.footerContactsItem}></div>
                    <div className={s.footerContactsItem}></div>
                    <div className={s.footerContactsItem}></div>
                    <div className={s.footerContactsItem}></div>
                </div>
                <h2>All rights reserved</h2>
            </div>
        </div>
    )
}
