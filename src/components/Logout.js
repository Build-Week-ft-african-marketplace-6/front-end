import React from 'react';
import { Redirect } from 'react-router';



const Logout = (props) => {
    const {logout} = props
    localStorage.removeItem('authorization');
    logout();
    return(
        <Redirect to='/'></Redirect>
    )
};

export default Logout;