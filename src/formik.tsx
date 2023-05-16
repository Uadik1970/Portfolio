import React from 'react';
import { Form, useFormik } from 'formik';



type FormikErrorType = {
    email?: string
    password?: string

}


const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    validate: (values) => {
        const errors: FormikErrorType = {}
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
        if (!values.password) {
            errors.password = 'Required'
        } else if (values.password.length < 3) {


            errors.password = 'password must be longer than 3 characters'
        }
        console.log(errors.password);
        return errors
    },
    onSubmit: values => {
        alert(JSON.stringify(values));
        // dispatch(loginTC(values))
        formik.resetForm()
    },
})
