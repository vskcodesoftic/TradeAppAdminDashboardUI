
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Auth from '../Auth/Authentication/Auth';

import { AuthContext } from '../shared/context/auth-context';


import React from 'react'

const Routes = () => {
    const auth = useContext(AuthContext)
    console.log(auth.isLoggedIn)
    return (
        <div>
            
        </div>
    )
}

export default Routes
