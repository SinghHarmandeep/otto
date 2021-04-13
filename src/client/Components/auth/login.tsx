import React, { FormEvent } from 'react';
import { request, setAuth } from '../../utils/app';

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
        console.log("before request");
        
        let d = request('../login', 'POST', {email: 't@t.t', pass: '1234'})
        d.then((res)=>{
            setAuth(res.data.token)
            localStorage.setItem('token', res.data.token);
        })
        console.log("after request");
        e.preventDefault();
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