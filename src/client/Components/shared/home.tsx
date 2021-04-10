import React from 'react';
import { Link } from 'react-router-dom';


const home = () => {
    return (
        <div className='container' >
            <h1 className='d-flex justify-content-center'>Making deliveries accessable!</h1>
            <h2 className='d-flex justify-content-center'>
                Get anything from anywhere to anywhere from the comfort of your home! <br></br>
            </h2>
            <h2 className='text-center'>We make it easy like 1 2 3.</h2>
            <ul className="list-group text-center container">
                <li className="list-group-item">1. Choose pickup location</li>
                <li className="list-group-item ">2. Provide package details</li>
                <li className="list-group-item">3. Choose dropoff location</li>
            </ul>
            <h1 >
                Horrary that's all. Now you pay us for the exclusive service and we
                deliver your item in real time, yes you heard it right real time!
                <br></br>
                <Link type="button" className="btn btn-primary col-12" to='/findride'>Let's get to it</Link>
            </h1>
        </div>

    )
}

export default home;