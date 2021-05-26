
import React, { FormEvent, useState } from 'react';
import { request } from "../../utils/app";

import Map from './mapView';
import Detials from './details'

// const form = (props: any) => {

class Form extends React.Component<IFormProps, IFormState> {
    // const [origin, setOrigin] = useState('');
    // const [dest, setDest] = useState('');

    constructor(props: any) {
        super(props);
        this.state = {
            orgn: '',
            dest: ''
        }
    }
    render() {
        console.log(this.state);

        return (
            <div className='col-4 bg-dark mx-2 rounded shadow-lg' >

                {/* <form onSubmit={e => this.handleSubmit(e)} className='my-2'>
                        <label className="mt-2">Pick up address:</label>
                        <input type="text" className="form-control" value={this.state.orgn} name="pickup"
                            onChange={e => { this.setState({ orgn: e.target.value }) }} placeholder="123 pickup street" />

                        <label className="mt-2">Item Discription:</label>
                        <input type="text" className="form-control" name="item" placeholder="Book, Keys, Food, package etc" />


                        <label className="mt-2">Drop off address:</label>
                        <input type="text" className="form-control" value={this.state.dest} name="dropoff" 
                        onChange={e => { this.setState({ dest: e.target.value }) }} placeholder="123 drop street" />

                        <div className="row mt-2">
                            <div className='col'>
                                <label>Date:</label>
                                <input className="form-control col" type="date" name="pickupdate" />
                            </div>

                            <div className='col'>
                                <label>Time:</label>
                                <input className="form-control col" type="time" name="pickuptime" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary col my-2">Let's go!</button>
                    </form> */}

                {/* < Detials dest={this.state.dest} orgn={this.state.orgn} pickUp={this.pickUp} dropOff={this.dropOff} /> */}
                <div style={mapStyle}>
                    <Map orig={(this.state.orgn) ? this.state.orgn : 'new york'} dest={(this.state.dest) ? this.state.dest : 'new york'} />
                </div>

            </div>
        )
    }
    
    
    pickUp = (val: string) => this.setState({orgn: val})
    dropOff = (val: string) => this.setState({dest: val})

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        // setAuth(localStorage.getItem('token'))
        let res = request('/findride', 'POST', { data: 'data sent is the following' })
        res.then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
            this.showAlert('you must be logedin to make this request!')
        });
    }

    showAlert = (msg: string) => {
        alert(msg)
    }

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



interface IFormState {
    orgn: string,
    dest: string
}
interface IFormProps {
    ar: any
}

export default Form;