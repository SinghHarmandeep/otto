import React, { FormEvent, useState } from 'react';
import { request } from "../../utils/app";

const contact = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [msg, setMsg] = useState('')

    let contactForm = < div className="container text-center" >
        <h1>Contact us</h1>
        <form onSubmit={e => handleSubmit(e)} >
            <div className="row justify-content-center form-group">
                <input className="col-sm-4 form-control"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value) }}
                    placeholder='Email' />
            </div>
            <div className="row justify-content-center form-group">
                <input className="col-sm-4 form-control"
                    type="string"
                    name="number"
                    value={phone}
                    onChange={e => { setPhone(e.target.value) }}
                    placeholder='123-123-1234' />
            </div>
            <div className="row justify-content-center form-group">
                <textarea className="col-sm-4 form-control"
                    rows={5}
                    name="inFile"
                    value={msg}
                    onChange={e => { setMsg(e.target.value) }}
                    placeholder="message" />
            </div>
            <div className="row justify-content-center form-group">
                <button className="col-sm-4 btn-primary form-control">
                    Send
                </button>
            </div>
        </form >
    </div >
    return (
        contactForm
    )
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        let res = request('/contact', 'POST',
            { email, phone, msg }
        )
        res.then(res => {
                contactForm = <p>message recieved</p>
        }).catch(err => {
                contactForm = <p>error occured in the server</p>
        })
        // e.preventDefault()
    }
}



export default contact;