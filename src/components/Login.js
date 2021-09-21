import React from 'react';
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

const Login = (props) => {
    const {
        values,
        disabled,
        errors,
    } = props

    const history = useHistory();

    const loginSubmit = () => {
        history.push('/Home')
    }

    return (
    <StyledForm>

        <div className='errors'>
            <div>{errors}</div>
            <div>{errors}</div>
        </div>

    <InputBackground className='form-group inputs'>
        <h2>Welcome to the African Marketplace Login Page!</h2>
        <h3>Please login with your required information.</h3>
        
        <h4>Username:</h4>
        <StyledLabel> 
            <input
                id='username-input'
                value={values}
                name='username'
                type='text'
            />
        </StyledLabel>

        <h4>Password:</h4>
        <StyledLabel> 
            <input
                id='username-input'
                value={values}
                name='password'
                type='text'
            />
        </StyledLabel>

        <div>
            <button onClick={loginSubmit} disabled={disabled}>Submit</button>
        </div>
    </InputBackground>
    </StyledForm>
)}


export default Login