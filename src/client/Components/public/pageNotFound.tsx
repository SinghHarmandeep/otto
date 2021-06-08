import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaRegFrownOpen } from 'react-icons/fa';
import { BsCloud } from 'react-icons/bs';

const error = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>404 page not found</title>
            </Helmet>
            <div className="d-flex justify-content-center">
                <FaRegFrownOpen style={{ width: '200px', height: '200px' }} />
                <BsCloud style={{ width: '200px', height: '200px' }} />
                <h1 className="d-flex justify-content-center text-white">You seem lost!</h1>
            </div>
            <Link className='translate-middle d-flex justify-content-center btn btn-primary btn-lg btn-block' to='/'>
                Let's go back home!
                </Link>
        </div>
    )
}

export default error;
