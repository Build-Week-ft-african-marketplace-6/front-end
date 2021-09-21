import React from 'react';

const Login = () => {

    // const onSubmit = evt => {
    //     evt.preventDefault()
    //     submit()
    //   }

    return (
    <div>

        <h1>This is the login page!</h1>
        
        <label>Username
          <input
            name='username'
            type='text'
          />
        </label>

        <label>Password
          <input
            name='password'
            type='text'
          />
        </label>

        <button>Submit</button>

    </div>
)}


export default Login
