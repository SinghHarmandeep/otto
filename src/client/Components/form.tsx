import React from 'react';

const form = () => {
    return (
        <div>
            <form action='/../gobi/' method='POST'>
                <div className="form-group container p-3 my-3 border rounded shadow-lg">
                    <label>Pick up address:</label>
                    <input type="text" className="form-control" id="pickup" aria-describedby="emailHelp" placeholder="123 abc street" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your pickup address with anyone else.</small>
                </div>

                <div className="form-group container p-3 my-3 border rounded shadow-lg">
                    <label >Item Discription</label>
                    <input type="text" className="form-control" id="item" placeholder="Book, Keys, Food, package etc" />
                </div>
                <div className="form-group container p-3 my-3 border rounded shadow-lg">
                    <label>Drop off address:</label>
                    <input type="text" className="form-control" id="dropoff" aria-describedby="emailHelp" placeholder="123 abc street" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your drop off with anyone else.</small>
                </div>
                <div className='container p-3 my-3 border rounded shadow-lg'>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Date</label>
                        <div className="col-10">
                            <input className="form-control" type="date" id="pickupdate" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Time</label>
                        <div className="col-10">
                            <input className="form-control" type="time" value="13:45:00" id="pickuptime" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary col-12">Submit</button>
            </form>

        </div>
    )
}

export default form;