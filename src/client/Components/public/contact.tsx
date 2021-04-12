import React, { FormEvent } from 'react';
import { request } from "../../utils/app";

const contact = () => {
    return (
        <div className="container text-center">
            <h1>Contact us</h1>
            <form
                onSubmit={e => handleSubmit(e)} >
                <input
                    type="email"
                    name="email"
                    placeholder='abc@abc.com' />
                <textarea
                    rows={5}
                    name="inFile" />
                <input
                    type="submit" />
            </form>
        </div>
    )
}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
    request('/contact', 'POST' )
    e.preventDefault()
    
}


export default contact;