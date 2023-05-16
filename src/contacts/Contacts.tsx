import React from 'react'
import container from '../common/styles/Container.module.css'
import s from './Contacts.module.css'
import { Title } from '../components/title/Title'
import { Form, useFormik } from 'formik';
import { messagesApi } from '../api/api';
const Fade = require("react-reveal/Fade")


export type FormikErrorType = {
    name?: string
    email?: string
    phoneNumber?: string
    subject?: string
    messageText?: string
}



export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            subject: '',
            messageText: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.messageText) {
                errors.messageText = 'Message is required'
            } else if (values.messageText.length < 10) {
                errors.messageText = 'message must be longer than 10 characters'
            }
            return errors
        },
        onSubmit: values => {
            messagesApi.sendMessage(values)
            formik.resetForm()
            alert("Спасибо, Ваше письмо отправлено, я отвечу вам в ближайшее время")
        },
    })
    const hasEmailError = formik.touched.email && formik.errors.email
    const hasMessagetextError = formik.touched.messageText && formik.errors.messageText
    return (
        <section id='contacts' className={s.contactsBlock}>
            <Fade>
                <div className={`${container.container} ${s.contactsContainer}`}>
                    <Title title='Contacts' />
                    <form onSubmit={formik.handleSubmit}>
                        <div className={s.inputBox}>
                            <div className={s.inputField}>
                                <input type="text" placeholder='Your name'{...formik.getFieldProps('name')} />
                                <span className={s.focus}></span>
                            </div>
                            <div className={s.inputField}>
                                <input type="email" placeholder='Your email'{...formik.getFieldProps('email')} />
                                <span className={s.focus}></span>
                            </div>
                        </div>
                        <div className={s.inputBox}>
                            <div className={s.inputField}>
                                <input
                                    // type="number"
                                    placeholder='Your phone number'
                                    // type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                    {...formik.getFieldProps('phoneNumber')} />
                                <span className={s.focus}></span>
                            </div>
                            <div className={s.inputField}>
                                <input type="text" placeholder='Email subject'{...formik.getFieldProps('subject')} />
                                <span className={s.focus}></span>
                            </div>
                        </div>
                        <div className={s.textAreaField}>
                            <textarea
                                {...formik.getFieldProps('messageText')}
                                placeholder='Your Message'>
                            </textarea>
                            <span className={s.focus}></span>
                        </div>
                        <div className={`${s.btnBox} ${s.btn}`}>
                            {
                                hasEmailError
                                    ? <span className={s.error} >{formik.errors.email}</span>
                                    : hasMessagetextError
                                        ? <span className={s.error}>{formik.errors.messageText}</span>
                                        : null
                            }
                            <button
                                disabled={!!formik.errors.email || !!formik.errors.messageText}
                                type='submit'
                                className={`${s.btn} ${hasEmailError ? s.errorBtn : hasMessagetextError ? s.errorBtn : ''}`}
                            >
                                Send
                            </button>
                        </div>

                    </form>
                </div>
            </Fade>

        </section>
    )
}
