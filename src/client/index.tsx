import React from 'react';
import ReactDom from "react-dom";

import { Provider } from 'react-redux'

import Store from './redux/store'
import App from './App';

const gobi = document.getElementById(`gobi`)

ReactDom.render(
    <Provider store={Store} >
        <App />
    </Provider>
    ,
    gobi)