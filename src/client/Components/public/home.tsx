import React from 'react';

const home = () => {

    return (
        <div>
            <div className='container-lg' >
                <h1 className='d-flex justify-content-center'>Making deliveries accessable!</h1>
                <h2 className='d-flex justify-content-center'>
                    Get anything from anywhere to anywhere from the comfort of your home! <br></br>
                </h2>
                <h2 className='text-center'>We make it easy like 1 2 3.</h2>
                <ul className="list-group text-center container">
                    <li className="list-group-item text-dark">1. Choose pickup location</li>
                    <li className="list-group-item text-dark">2. Provide package details</li>
                    <li className="list-group-item text-dark">3. Choose dropoff location</li>
                </ul>
                <h1 >
                    Yay that's all. Enjoy the exclusive service while we
                    deliver your item in real time!
                <br></br>
                    <form action={'/findride'}>
                        <button type='submit' className="btn btn-primary col-12">Let's get to it</button>
                    </form>
                </h1>
            </div>
            <footer className="text-center" > &copy; Copyright 2021 Harmandeep Singh. All rights reserved.</footer>
        </div>
    )
}

export default home;