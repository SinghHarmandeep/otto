import React, { FormEvent } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom'
import { request, setAccessToken } from '../../utils/app';

import jwtDecode from 'jwt-decode';
class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <div className='container'>
                <h1>LogIn page</h1>
                <form onSubmit={e => this.handleSubmit(e)}>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className='col-sm-10'>
                            <input type="text" name="email" className='form-control'
                                value={this.state.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
                                placeholder='Cockroach' />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className='col-sm-10'>
                            <input type="password" name='pass' className='form-control'
                                value={this.state.password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })}
                                placeholder='keep it long' />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary col-12">Login</button>
                    <br /><br />
                    <Link to="/signup" className="text-light">Don't have an account? <b> Sing Up </b></Link>
                </form>
            </div>
        )
    }

    showAlert(msg: string) {
        alert(msg)
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            let req = request('../login', 'POST', { email: this.state.email, pass: this.state.password })
            req.then((res) => {
                // setAuth(res.data.token)
                // console.log(res);

                if (res.data.token) {
                    //on success
                    setAccessToken(res.data.token)
                    let resDecode: any = jwtDecode(res.data.token);
                    // console.log(resDecode);
                    this.props.setLog(true)
                    this.props.history.push('/findride')
                } else {
                    this.showAlert('invelid credintials')
                }

            }).catch((err) => {
                console.log('error occured');
                console.log(err);
            })
        } catch (error) {
            console.log('error occured in auth');
            console.log(error);
        }
    }
}

interface ILoginProps extends RouteComponentProps {
    setLog: any
}

interface ILoginState {
    email: string,
    password: string
}

export default Login