import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color: #343633;
    padding-top: 2em;
    padding-bottom: 16.33em;
`

const InputBackground = styled.div`
    background-color: #7D70BA;
    width: 50%;
    margin: 0 auto;
    padding-top: 2em;
    padding-bottom: 2em;
    border: 10px solid #DEC1FF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5em;
`

const StyledLabel = styled.label`
    margin-bottom: 1em;
`

const Login = () => {
//     const [signUpForm, setSignUpForm] = useState({
//         username: '',
//         password: '',
//     });

//     const makeChange = evt => {
//         setSignUpForm({
//             ...signUpForm, [evt.target.name]: evt.target.value,
//         })
//     };

//     const makeSubmit = evt => {
//         evt.preventDefault();
//         axiosWithAuth()
//             .post('https://web-45-heroku-tb.herokuapp.com/api/auth/login', signUpForm)
//             .then((res) => {
//                 localStorage.getItem('token', res.data.token);
//                 push('/');
//             }).catch((error) => {
//                 console.log(error);
//             })
//     };

    const history = useHistory();

    const loginSubmit = () => {
        history.push('/items')
    };

    return (
    <StyledForm >
    {/* onSubmit={makeSubmit} */}
    <InputBackground className='form-group inputs'>
        <h2>Welcome to the African Marketplace Login Page!</h2>
        <h3>Please login with your required information.</h3>
        
        <h4>Username:</h4>
        <StyledLabel> 
            <input
                id='username-input'
                // value={signUpForm.username}
                // onChange={makeChange}
                name='username'
                type='text'
            />
        </StyledLabel>

        <h4>Password:</h4>
        <StyledLabel> 
            <input
                id='username-input'
                // value={signUpForm.password}
                // onChange={makeChange}
                name='password'
                type='text'
            />
        </StyledLabel>

        <div>
            <button onClick={loginSubmit}>Submit</button>
        </div>
    </InputBackground>
    </StyledForm>
)}


export default Login