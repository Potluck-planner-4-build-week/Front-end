import * as yup from 'yup';

const formSchemaSignup = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required()
    .min(4, 'username must be at least 4 characters.'),

    email: yup
    .string()
    .email('This email address is not valid.')
    .trim()
    .required(),

    confirmEmail: yup
    .string()
    .trim()
    .required()
    .oneOf([yup.ref('email'), null], 'Email addresses do not match.'),

    password: yup
    .string()
    .trim()
    .required()
    .min(4, 'Password must be at least 4 characters.'),

    confirmPassword: yup
    .string()
    .trim()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords do not match.')
})

export default formSchemaSignup;