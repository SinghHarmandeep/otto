import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ride from './Components/shared/findRide';
import home from './Components/shared/home';
import error from './Components/public/pageNotFound';
import about from './Components/public/about';
import contact from './Components/public/contact';
import login from './Components/auth/login';
import register from './Components/auth/register';

import Navbar from './Components/shared/navbar';

const dd = () => {
    return (
        <Router>
                <Navbar />
            <Switch>
                <Route exact path = '/findride' component = {ride} />
                <Route exact path = '/about' component = {about} />
                <Route exact path = '/contact' component = {contact} />
                <Route exact path = '/login' component = {login} />
                <Route exact path = '/signup' component = {register} />
                <Route exact path = '/' component = {home} />
                <Route path = '/*' component = {error} />
            </Switch>
        </Router>
    )
}

export default dd;