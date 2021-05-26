import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Ride from './Components/shared/findRide/findRide';
import Home from './Components/public/home';
import Error from './Components/public/pageNotFound';
import About from './Components/public/about';
import Contact from './Components/public/contact';
import Login from './Components/auth/login';
import Register from './Components/auth/register';

import Navbar from './Components/shared/navbar/navbar';
import { getAccessToken, setAuth } from './utils/app';

const dd = () => {
    //state lifting, need inplementation
    const [logedin, setLogedin] = useState(false);

    setAuth(getAccessToken());
    return (
        <Router>
            <Navbar arr={[logedin, setLogedin]} />
                <Switch>
                    <Route exact path='/findride' component={Ride} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    {/* <Route exact path = '/login' component = {login is=setLogedin} /> */}
                    {/* <Route exact path = "/"><Movies logo = {logo} /></Route> for fucntionalComponents */}
                    <Route exact path='/login' render={props => (<Login setLog={setLogedin} {...props} />)} />
                    <Route exact path='/signup' render={props => (<Register setLog={setLogedin} {...props} />)} />
                    <Route exact path='/' component={Home} />
                    <Route path='/*' component={Error} />
                </Switch>
        </Router>
    )
}

export default dd;