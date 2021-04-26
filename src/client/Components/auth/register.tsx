import { Link } from "react-router-dom";
import React, { FormEvent } from 'react';

import { request, setAccessToken } from '../../utils/app';

class Register extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            pass: '',
            repass: '',
            number: '',
            username: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        let req = request('../signup', 'POST', {
            username: this.state.username,
            email: this.state.email,
            pass: this.state.pass,
            // repass: this.state.repass,
            phone: this.state.number
        })
        req.then(async (res) => {
            // setAuth(res.data.token)
            console.log(res);
            console.log('request came back');
            

            // if (res.data.token) {
            //     //on success
            //     console.log(res.data.token);
                
            // } else {
            //     console.log('invalid credintials');
                
            //     // this.showAlert('invelid credintials')
            // }

        }).catch((err) => {
            console.log('error occured');
            console.log(err);
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <h1>Register</h1>
                <form onSubmit={e => this.handleSubmit(e)}>

                    {/* username */}
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                        <div className='col-sm-10'>
                            <input type="text" name="username" placeholder='Almighty' className='form-control'
                                value={this.state.username}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value })}
                            />
                        </div>
                    </div>
                    {/* email */}
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                        <div className='col-sm-10'>
                            <input type="email" name="email" placeholder='takeit@drop.off' className='form-control'
                                value={this.state.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
                            />
                        </div>
                    </div>
                    {/* password */}
                    <div className="form-group row">
                        <label htmlFor="pass" className="col-sm-2 col-form-label">Password</label>
                        <div className='col-sm-10'>
                            <input type="password" name='pass' placeholder='********' className='form-control'
                                value={this.state.pass}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ pass: e.target.value })}
                            />
                        </div>
                    </div>
                    {/* re-enter pass */}
                    <div className="form-group row">
                        <label htmlFor="pass" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className='col-sm-10'>
                            <input type="password" name='re-pass' placeholder='********' className='form-control'
                                value={this.state.repass}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ repass: e.target.value })}
                            />
                        </div>
                    </div>
                    {/* phone number */}
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">Phone no:</label>
                        <div className='col-sm-10'>
                            <input type="number" name="phone" placeholder='123456789' className='form-control'
                                value={this.state.number}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ number: e.target.value })}
                            />
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
    username: string,
    pass: string,
    repass: string,
    email: string,
    number: string
}

export default Register