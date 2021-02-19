import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const error = () => {
    return (
            <div>
                <Helmet>
                    <title>404 page not found</title>
                </Helmet>
                <h1 className="d-flex justify-content-center text-warning">404 page not found</h1>
                <Link className='d-flex justify-content-center text-light' to='/findRide'>Return Home</Link>
            </div>
    )
}

export default error;
