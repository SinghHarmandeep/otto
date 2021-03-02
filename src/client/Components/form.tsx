import React from 'react';

import Map from './mapView';

const form = () => {
    return (
        <div>
            <form action='/../findride' method='POST'>
                <div className="form-group container p-3 my-3 border rounded shadow">
                    <label>Pick up address:</label>
                    <input type="text" className="form-control" name="pickup" aria-describedby="emailHelp" placeholder="123 abc street" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your pickup address with anyone else.</small>
                </div>

                <div className="form-group container p-3 my-3 border rounded shadow">
                    <label >Item Discription</label>
                    <input type="text" className="form-control" name="item" placeholder="Book, Keys, Food, package etc" />
                </div>
                <div className="form-group container p-3 my-3 border rounded shadow">
                    <label>Drop off address:</label>
                    <input type="text" className="form-control" name="dropoff" aria-describedby="emailHelp" placeholder="123 abc street" />
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
                <button type="submit" className="btn btn-primary col-12">Submit</button>
            </form>
            <React.Fragment>
                <Map />
            </React.Fragment>

        </div>
    )
}

export default form;