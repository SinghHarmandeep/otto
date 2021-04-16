import React, { FormEvent } from 'react';
import { request } from '../../utils/app';

import {useHistory} from 'react-router-dom';
class Login extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: "",
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>this.setState({ email: e.target.value })}
                        placeholder='Cockroach' />

                    <input type="password" name='pass'
                        value={this.state.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>this.setState({ password: e.target.value })}
                        placeholder='keep it long' />

                    <button type="submit" className="btn btn-primary col-12">Submit</button>
                </form>
            </div>
        )
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        console.log("before request");
        console.log(this.state.email + "  " + this.state.password);

        let d = request('../login', 'POST', { email: this.state.email, pass: this.state.password })
        d.then((res) => {
            // setAuth(res.data.token)
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                const history = useHistory()
                history.push('/')
            }else{
                alert('invelid credintials')
            }
            
        })
        .catch((err)=> {
            console.log(err);
        })
        console.log("after request");
        e.preventDefault();
    }
}

interface Props {
    arr: []
}

interface State {
    email: string,
    password: string
}

export default Login