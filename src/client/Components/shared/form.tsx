
import React, { FormEvent, useState } from 'react';
import { request } from "../../utils/app";

import Map from './mapView';

const form = () => {

    const [origin, setOrigin] = useState('');
    const [dest, setDest] = useState('');
    return (
        <div className='' style={{ color: 'black' }}>
            <div>

                <form onSubmit={e => handleSubmit(e)} className=''>
                    <div className="form-group col">
                        <label>Pick up address:</label>
                        <input type="text" className="form-control col-4" value={origin} name="pickup"
                            onChange={e => { setOrigin(e.target.value) }} placeholder="123 pickup street" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your pickup address with anyone else.</small>
                    </div>
                    <div className="form-group col p-3 my-3 ">
                        <label >Item Discription</label>
                        <input type="text" className="form-control col-4" name="item" placeholder="Book, Keys, Food, package etc" />
                    </div>
                    <div className="form-group col p-3 my-3 ">
                        <label>Drop off address:</label>
                        <input type="text" className="form-control col-4" value={dest} name="dropoff" onChange={e => { setDest(e.target.value) }} placeholder="123 drop street" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your drop off with anyone else.</small>
                    </div>
                    <div className='form-group col p-3 my-3 '>
                        <div className="col form-group row">
                            <label>Date:</label>
                            <input className="form-control col-2" type="date" name="pickupdate" />
                        </div>
                        <div>
                            <label >Time: </label>
                            <input className="form-control col-2" type="time" name="pickuptime" />
                        </div>
                    </div>
                    <div className='form-group col p-3 my-3'>
                        <button type="submit" className="btn btn-primary col-4">Let's go!</button>
                    </div>
                </form>

                <div
                    style={mapStyle}>
                    <Map orig={(origin) ? origin : 'new york'} dest={(dest) ? dest : 'new york'} />
                </div>
            </div>

        </div>
    )
}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // setAuth(localStorage.getItem('token'))
    let res = request('/findride', 'POST', { data: 'data sent is the following' })
    res.then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
        showAlert('you must be logedin to make this request!')
    });
}

function showAlert(msg: string) {
    alert(msg)
}

const mapStyle = {
    // position: 'absolute' as 'absolute',
    position: 'fixed' as 'fixed',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundColor: '#212529',
    // backgroundColor: 'blue',
    overflowY: 'hidden' as 'hidden'
}

export default form;