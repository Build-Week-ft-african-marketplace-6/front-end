import * as yup from 'yup';

export default yup.object().shape({
    username: yup.string().required('You must type a username').min(4, 'Your username must be 4 characters long or more'),
    password: yup.string().min(4, 'Your password must be longer than 4 characters').required('You must have a pasword')
})