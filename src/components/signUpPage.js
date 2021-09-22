import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color: #343633;
    padding-top: 2em;
    padding-bottom: 5em;
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

const initialFormValues = {
    username: '',
    password: '',
    // first_name: '',
    // last_name: '',
    // email: '',
}

export default function SignUpForm() {
    
    const history = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);

    const makeChange = evt => {
        setFormValues({
            ...formValues,[evt.target.name]: evt.target.value
        })
    };

    const makeSubmit = evt => {
        evt.preventDefault()
        const newPerson = {
            username: formValues.username,
            password: formValues.password,
            // first_name: formValues.first_name,
            // last_name: formValues.last_name,
            // email: formValues.email,
            
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
        history.push('/')
    };
    

return (
<StyledForm id='signUp-form' onSubmit={makeSubmit}>
    
    <InputBackground className='form-group inputs'>
        <h2>Welcome to the African Marketplace Sign Up Page!</h2>
        <h3>Please complete the required information to create an account.</h3>

        <h4>Username:</h4>
        <StyledLabel> 
            <input
                id='username-input'
                value={formValues.username}
                onChange={makeChange}
                name='username'
                type='text'
            />
        </StyledLabel>

        <h4>Password:</h4>
        <StyledLabel> 
            <input
                id='username-input'
                value={formValues.password}
                onChange={makeChange}
                name='password'
                type='text'
            />
        </StyledLabel>

        {/* <h4>First Name:</h4>
        <StyledLabel> 
            <input
                id='first_name-input'
                value={formValues.first_name}
                onChange={makeChange}
                name='first_name'
                type='text'
            />
        </StyledLabel>

        <h4>Last Name:</h4>
        <StyledLabel> 
            <input
                id='last_name-input'
                value={formValues.last_name}
                onChange={makeChange}
                name='last_name'
                type='text'
            />
        </StyledLabel>

        <h4>Email:</h4>
        <StyledLabel> 
            <input
                id='email-input'
                value={formValues.email}
                onChange={makeChange}
                name='email'
                type='text'
            />
        </StyledLabel> */}

        
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
