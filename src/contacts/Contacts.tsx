import React from 'react'
import s from './Contacts.module.css'
import container from '../common/styles/Container.module.css'



export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${container.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={s.contactsForm}>
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Your Email' />
                    <textarea name="" placeholder='Your message' />
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}
