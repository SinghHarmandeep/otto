import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import temp from './Components/temp';
import home from './Components/home';

const dd = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/' component = {home} />
                <Route exact path = '/go' component = {temp} />
            </Switch>
        </Router>
    )
}

export default dd;