
import React, { FormEvent, useState } from 'react';
import { request } from "../../utils/app";

import Map from './mapView';
import Detials from './details'

class Form extends React.Component<IFormProps, IFormState> {

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

                < Detials
                    dest={this.state.dest}
                    orgn={this.state.orgn}
                    pickUp={this.pickUp}
                    dropOff={this.dropOff}
                    submit={this.handleSubmit}
                />
                <div style={mapStyle}>
                    <Map
                        orig={(this.state.orgn) ? this.state.orgn : 'new york'}
                        dest={(this.state.dest) ? this.state.dest : 'new york'}
                    />
                </div>

            </div>
        )
    }


    pickUp = (val: string) => this.setState({ orgn: val })
    dropOff = (val: string) => this.setState({ dest: val })

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // setAuth(localStorage.getItem('token'))
        let res = request('/findride', 'POST', 
        { data: {

        } })
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

}

export default Form;