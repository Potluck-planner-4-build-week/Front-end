import * as yup from 'yup';

const formSchemaSignup = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Enter valid username')
    .min(4, 'username must be at least 4 characters'),

    email: yup
    .string()
    .trim()
    .required('Enter valid email address'),

    confirmEmail: yup
    .string()
    .trim()
    .required('Must match email address entered'),

    password: yup
    .string()
    .required('Enter your password'),

    confirmPassword: yup
    .string()
    .required('Must match password entered')
})