import { Link } from "react-router-dom";
import React from 'react';

class Register extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className='container'>
                <h1>Register</h1>
                <form action="../signup" method='POST'>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                        <div className='col-sm-10'>
                            <input type="text" name="username" placeholder='Almighty' className='form-control' />
                        </div>

                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                        <div className='col-sm-10'>
                            <input type="email" name="email" placeholder='takeit@drop.off' className='form-control' />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="pass" className="col-sm-2 col-form-label">Password</label>
                        <div className='col-sm-10'>
                            <input type="password" name='pass' placeholder='********' className='form-control' />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="pass" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className='col-sm-10'>
                            <input type="password" name='re-pass' placeholder='********' className='form-control' />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">Phone no:</label>
                        <div className='col-sm-10'>
                            <input type="number" name="phone" placeholder='123456789' className='form-control' />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary col-12">Sign Up</button>
                    <br /><br />
                    <Link to="/login" className="text-dark">Have an account? <b> Sing In </b></Link>
                </form>
            </div>
        )
    }
}

interface Props {
    arr: []
}

interface State {
    username: String,
    password: String,
    email: String,
    number: number
}

export default Register