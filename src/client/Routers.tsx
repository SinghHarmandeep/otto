import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import navBar from './Components/navbar';
import homePage from './App';

const routers = () => {
    return (
        <div>
            <h1>hello gobi ji</h1>
            <Router>
                <Switch>
                    <Route exact path= '/' component = {homePage}/>
                    <Route exact path='/gobi' component = {navBar}/>
                </Switch>
            </Router>
        </div>

    )
}


export default routers;