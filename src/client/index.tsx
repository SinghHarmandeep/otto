import React from 'react';
import ReactDom from "react-dom";

import { Provider } from 'react-redux'

import App from './App';

const gobi = document.getElementById(`gobi`)

ReactDom.render(
    <Provider store={null} >
        <App />
    </Provider>,
    gobi)