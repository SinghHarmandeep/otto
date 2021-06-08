import React from 'react';
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

                <FaRegFrownOpen style={{ width: '400px', height: '400px' }} />

                <div className='d-flex rounded-circle border' style={{ height: '40px', width: '40px', marginTop: '75px' }} />
                <h1 className="d-flex justify-content-center text-white mt-3 rounded-pill border px-2"
                    style={{ height: 'fit-content' }}>
                    You seem lost!
                </h1>
            </div>
            <Link className='translate-middle d-flex justify-content-center btn btn-primary btn-lg btn-block' to='/'>
                Let's get you home!
                </Link>
        </div >
    )
}

export default error;
