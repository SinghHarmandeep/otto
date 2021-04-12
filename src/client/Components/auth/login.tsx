import React, { FormEvent } from 'react';
import { request } from '../../utils/app';

class Login extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className= 'container'>
                <h1>LogIn page</h1>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" name="email" id="" placeholder='Cockroach' />
                    <input type="password" name='pass' placeholder='********' />
                    <button type="submit" className="btn btn-primary col-12">Submit</button>
                </form>
            </div>
        )
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        request('../login', 'POST', {email: 'sdfdsfds', pass: '1234'})
    }
}

interface Props {
    arr : []
  }
  
  interface State {
      username: String,
      password: String
  }

export default Login