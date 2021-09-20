import React from 'react';

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
        submit()
      }

      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }



return (
<form id='signUp-form' onSubmit={onSubmit}>
    <div className='form-group submit'>
        <div className='errors'>
            <div>{errors}</div>
            <div>{errors}</div>
            <div>{errors}</div>
            <div>{errors}</div>
            <div>{errors}</div>
        </div>
    </div>

    <div className='form-group inputs'>
        <h2>Welcome to the African Marketplace Sign Up Page!</h2>
        <h3>Please complete the required information to create an account.</h3>

        <label>Username
            <input
                id='username-input'
                value={values}
                onChange={onChange}
                name='username'
                type='text'
            />
        </label>

        <label>Password
            <input
                id='username-input'
                value={values}
                onChange={onChange}
                name='password'
                type='text'
            />
        </label>

        <label>First Name
            <input
                id='first_name-input'
                value={values}
                onChange={onChange}
                name='first_name'
                type='text'
            />
        </label>

        <label>Last Name
            <input
                id='last_name-input'
                value={values}
                onChange={onChange}
                name='last_name'
                type='text'
            />
        </label>

        <label>Email
            <input
                id='email-input'
                value={values}
                onChange={onChange}
                name='email'
                type='text'
            />
        </label>

        <div>
            <h3>Is your information correct?</h3>
            <button id='signUp-button' disabled={disabled}>Sign Up!</button>
            <button id='cancel-button'>Cancel</button>
        </div>

    </div>
</form>

)}
