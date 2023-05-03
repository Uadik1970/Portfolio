import React from 'react'
import container from '../common/styles/Container.module.css'
import s from './Contacts.module.css'
import { Title } from '../components/title/Title'



export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${container.container} ${s.contactsContainer}`}>
                <Title title='Contacts' />
                <form className={s.contactsForm}>
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Your Email' />
                    <textarea name="" placeholder='Your message' />
                    <button type='submit'>Send</button>
                </form>

            </div>
        </div>
    )
}
