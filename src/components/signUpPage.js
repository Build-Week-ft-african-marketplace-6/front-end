import React from 'react';
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

export default function SignUpForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        onSubmit()
      }

      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        onChange(name, valueToUse);
      }



return (
<StyledForm id='signUp-form' >
    {/* onSubmit={onSubmit}  */}
    <div className='form-group submit'>
        <div className='errors'>
            <div>{errors}</div>
            <div>{errors}</div>
            <div>{errors}</div>
            <div>{errors}</div>
            <div>{errors}</div>
        </div>
    </div>

    <InputBackground className='form-group inputs'>
        <h2>Welcome to the African Marketplace Sign Up Page!</h2>
        <h3>Please complete the required information to create an account.</h3>

        <h4>Username:</h4>
        <StyledLabel> 
            <input
                id='username-input'
                value={values}
                onChange={onChange}
                name='username'
                type='text'
            />
        </StyledLabel>

        <h4>Password:</h4>
        <StyledLabel> 
            <input
                id='username-input'
                value={values}
                onChange={onChange}
                name='password'
                type='text'
            />
        </StyledLabel>

        <h4>First Name:</h4>
        <StyledLabel> 
            <input
                id='first_name-input'
                value={values}
                onChange={onChange}
                name='first_name'
                type='text'
            />
        </StyledLabel>

        <h4>Last Name:</h4>
        <StyledLabel> 
            <input
                id='last_name-input'
                value={values}
                onChange={onChange}
                name='last_name'
                type='text'
            />
        </StyledLabel>

        <h4>Email:</h4>
        <StyledLabel> 
            <input
                id='email-input'
                value={values}
                onChange={onChange}
                name='email'
                type='text'
            />
        </StyledLabel>

        
        <StyledLabel>Is your information correct?
            <input
                value={values}
                onChange={onChange}
                name='information'
                type='checkbox'
            />
        </StyledLabel>

        <div>
            <button id='signUp-button' disabled={disabled}>Sign Up!</button>
            <button id='cancel-button'>Cancel</button>
        </div>

    </InputBackground>
</StyledForm>

)}
