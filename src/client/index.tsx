import React from 'react';
import ReactDom from "react-dom";

import App from './App';

// import './scss/app.scss'; //use this or the next line to use bootstrap
import '../../node_modules/bootstrap/scss/bootstrap.scss';


ReactDom.render(<App />, document.getElementById('gobi'))