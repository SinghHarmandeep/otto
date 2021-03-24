import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ride from './Components/findRide';
import home from './Components/home';
import error from './Components/pageNotFound';
import about from './Components/about';
import contact from './Components/contact';
import login from './Components/login';

const dd = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/findride' component = {ride} />
                <Route exact path = '/about' component = {about} />
                <Route exact path = '/contact' component = {contact} />
                <Route exact path = '/login' component = {login} />
                <Route exact path = '/' component = {home} />
                <Route path = '/*' component = {error} />
            </Switch>
        </Router>
    )
}

export default dd;