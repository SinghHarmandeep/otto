import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ride from './Components/findRide';
import home from './Components/home';
import error from './Components/pageNotFound';

const dd = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/findride' component = {ride} />
                <Route exact path = '/' component = {home} />
                <Route path = '/*' component = {error} />
            </Switch>
        </Router>
    )
}

export default dd;