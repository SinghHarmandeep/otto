import { Link, RouteComponentProps } from "react-router-dom";
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

    showAlert(msg: string) {
        alert(msg)
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

            if (res.data.token) {
                //on success
                setAccessToken(res.data.token)
                this.props.setLog(true)
                this.props.history.push('/findride')
            } else {
                //server sent back json error msg
                this.showAlert(res.data.msg)
            }

        }).catch((err) => {
            console.log('error occured');
            console.log(err);
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <h1 className="text-center">Register</h1>
                <form onSubmit={e => this.handleSubmit(e)}>

                    {/* username */}
                    <div className="row justify-content-center form-group">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
                        <input type="text" name="username" placeholder='Almighty' className='form-control col-4'
                            value={this.state.username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value })}
                        />
                    </div>
                    {/* email */}
                    <div className="row justify-content-center form-group">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                        <input type="email" name="email" placeholder='takeit@drop.off' className='form-control col-4'
                            value={this.state.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    {/* password */}
                    <div className="row justify-content-center form-group">
                        <label htmlFor="pass" className="col-sm-2 col-form-label">Password:</label>
                        <input type="password" name='pass' placeholder='********' className='form-control col-4'
                            value={this.state.pass}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ pass: e.target.value })}
                        />
                    </div>
                    {/* re-enter pass */}
                    <div className="row justify-content-center form-group">
                        <label htmlFor="pass" className="col-sm-2 col-form-label">Confirm Password:</label>
                        <input type="password" name='re-pass' placeholder='********' className='form-control col-4'
                            value={this.state.repass}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ repass: e.target.value })}
                        />
                    </div>
                    {/* phone number */}
                    <div className="row justify-content-center form-group">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">Phone no:</label>
                        <input type="number" name="phone" placeholder='123456789' className='form-control col-4'
                            value={this.state.number}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ number: e.target.value })}
                        />
                    </div>
                    <div className="row justify-content-center form-group">
                        <button type="submit" className="btn btn-primary col-6">Sign Up</button>
                    </div>
                    <div className="row justify-content-center form-group">

                        <Link to="/login" className="text-light">Have an account? <b> Sing In </b></Link>
                    </div>
                </form>
            </div>
        )
    }
}

interface Props extends RouteComponentProps {
    setLog: any
}

interface State {
    username: string,
    pass: string,
    repass: string,
    email: string,
    number: string
}

export default Register