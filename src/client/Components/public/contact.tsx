import React, { FormEvent } from 'react';
import { request } from "../../utils/app";

const contact = () => {
    return (
        <div className="container text-center">
            <h1>Contact us</h1>
            <form onSubmit={e => handleSubmit(e)} >
                <div className="row justify-content-center form-group">
                    <input className="col-sm-4 form-control"
                        type="email"
                        name="email"
                        placeholder='Email' />
                </div>
                <div className="row justify-content-center form-group">
                    <input className="col-sm-4 form-control"
                        type="string"
                        name="number"
                        placeholder='123-123-1234' />
                </div>
                <div className="row justify-content-center form-group">
                    <textarea className="col-sm-4 form-control"
                        rows={5}
                        name="inFile"
                        placeholder="message" />
                </div>
                <div className="row justify-content-center form-group">
                    <button className="col-sm-4 btn-primary form-control">
                        Send
                </button>
                </div>
            </form >
        </div >
    )
}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
    request('/contact', 'POST')
    e.preventDefault()

}


export default contact;