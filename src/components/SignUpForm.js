import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color: #343633;
    padding-top: 2em;
    padding-bottom: 11.9em;
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
    color: #343633;
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

const initialFormValues = {
    username: '',
    password: '',
}

export default function SignUpForm() {
    
    const history = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);

    const makeChange = evt => {
        setFormValues({
            ...formValues, [evt.target.name]: evt.target.value
        })
    };

    const makeSubmit = evt => {
        evt.preventDefault()
        const newPerson = {
            username: formValues.username,
            password: formValues.password,
            
        }
        axios.post("https://web-45-heroku-tb.herokuapp.com/api/auth/register", newPerson)
        .then(res => {
            console.log(res);
        })
        .catch((error) => {
            console.log('this is the error',error);
            })
   
        
        };

    const signUp = (evt) => {
        evt.preventDefault();
        history.push('/Login')
    };
    

return (
<StyledForm id='signUp-form' onSubmit={makeSubmit}>
    
    <InputBackground className='form-group inputs'>
        <StyledH2>Welcome to the African Marketplace Sign Up Page!</StyledH2>
        <StyledH3>Please complete the required information to create an account.</StyledH3>

        <StyledH4>Username:</StyledH4>
        <StyledLabel> 
            <input
                id='username-input'
                value={formValues.username}
                onChange={makeChange}
                name='username'
                type='text'
            />
        </StyledLabel>

        <StyledH4>Password:</StyledH4>
        <StyledLabel> 
            <input
                id='username-input'
                value={formValues.password}
                onChange={makeChange}
                name='password'
                type='text'
            />
        </StyledLabel>
        
        <StyledLabel>Is your information correct?
            <input
                name='information'
                type='checkbox'
            />
        </StyledLabel>

        <div>
            <button onClick={signUp} type="submit" id='signUp-button'>Sign Up!</button>
            
            <button id='cancel-button'>Cancel</button>
        </div>

    </InputBackground>
</StyledForm>

)}
