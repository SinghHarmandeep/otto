import React from 'react';

import Nav from './Components/navbar';

// import './scss/app.scss'; //use this or the next line to use bootstrap
import '../../node_modules/bootstrap/scss/bootstrap.scss';

const dd = () => {
    
    return(
        <React.Fragment>
            <Nav />
            <h1>hello BigWorld</h1>
        </React.Fragment>
    )
};

export default dd;