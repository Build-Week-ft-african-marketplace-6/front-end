import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color: #343633;
    padding-top: 2em;
    padding-bottom: 14.27em;
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
const StyledH2 = styled.h2`
    color: #343633;
`
const StyledH3 = styled.h3`
    color: #343633;
`
const StyledH4 = styled.h4`
    color: #343633;
`

const Login = () => {
    const [signUpForm, setSignUpForm] = useState({
        username: '',
        password: '',
    });

    const { push } = useHistory();

    const makeChange = evt => {
        setSignUpForm({
            ...signUpForm, [evt.target.name]: evt.target.value,
        })
    };

    const makeSubmit = evt => {
        evt.preventDefault();
        // axiosWithAuth()
            axios.post('https://web-45-heroku-tb.herokuapp.com/api/auth/login', signUpForm)
            .then((res) => {
                // localStorage.getItem('token', res.data.token);
                console.log(res.data);
                push('/');
            }).catch((error) => {
                console.log(error);
            })
    };

    const history = useHistory();

    const loginSubmit = () => {
        history.push('/ItemList')
    };

    return (
    <StyledForm >
    onSubmit={makeSubmit}
    <InputBackground className='form-group inputs'>
        <StyledH2>Welcome to the African Marketplace Login Page!</StyledH2>
        <StyledH3>Please login with your required information.</StyledH3>
        
        <StyledH4>Username:</StyledH4>
        <StyledLabel> 
            <input
                id='username-input'
                value={signUpForm.username}
                onChange={makeChange}
                name='username'
                type='text'
            />
        </StyledLabel>

        <StyledH4>Password:</StyledH4>
        <StyledLabel> 
            <input
                id='username-input'
                value={signUpForm.password}
                onChange={makeChange}
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