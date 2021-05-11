
import React, { FormEvent, useState } from 'react';
import { request } from "../../utils/app";

import Map from './mapView';

const form = () => {

    const [origin, setOrigin] = useState('');
    const [dest, setDest] = useState('');
    return (
        <div className='container'>
            <div className='row'>
                <form onSubmit={e => handleSubmit(e)} className='col'>
                    <div className="form-group container p-3 my-3 border rounded shadow">
                        <label>Pick up address:</label>
                        <input type="text" className="form-control" value={origin} name="pickup"
                        onChange={e => {setOrigin(e.target.value)}} placeholder="123 pickup street" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your pickup address with anyone else.</small>
                    </div>
                    <div className="form-group container p-3 my-3 border rounded shadow">
                        <label >Item Discription</label>
                        <input type="text" className="form-control" name="item" placeholder="Book, Keys, Food, package etc" />
                    </div>
                    <div className="form-group container p-3 my-3 border rounded shadow">
                        <label>Drop off address:</label>
                        <input type="text" className="form-control" value={dest} name="dropoff" onChange={e=>{setDest(e.target.value)} } placeholder="123 drop street" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your drop off with anyone else.</small>
                    </div>
                    <div className='container p-3 my-3 border rounded shadow'>
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Date</label>
                            <div className="col-10">
                                <input className="form-control" type="date" name="pickupdate" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Time</label>
                            <div className="col-10">
                                <input className="form-control" type="time" name="pickuptime" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary col-12">Let's go!</button>
                </form>
                <div className='col'>
                    <Map orig={origin} dest={dest}/>
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

export default form;