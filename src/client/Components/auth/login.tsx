import React, { FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { request, setAccessToken } from '../../utils/app';

import { useHistory } from 'react-router-dom';
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

                    <input type="text" name="email"
                        value={this.state.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
                        placeholder='Cockroach' />

                    <input type="password" name='pass'
                        value={this.state.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })}
                        placeholder='keep it long' />

                    <button type="submit" className="btn btn-primary col-12">Submit</button>
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
            let d = request('../login', 'POST', { email: this.state.email, pass: this.state.password })
            d.then((res) => {
                // setAuth(res.data.token)
                // console.log(res);

                if (res.data.token) {
                    setAccessToken(res.data.token)
                    this.props.history.push('/')
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
    arr: []
}

interface ILoginState {
    email: string,
    password: string
}

export default Login