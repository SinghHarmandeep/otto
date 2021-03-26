import React from 'react';
import { StringLiteralLike } from 'typescript';

class Register extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className= 'container'>
                <h1>Register</h1>
                <form action="../register" method='POST'>
                    <input type="text" name="username" id="" placeholder='Cockroach' />
                    <input type="email" name="email" id="" placeholder='takeit@drop.off' />
                    <input type="number" name="phone" id="" placeholder='123456789' />
                    <input type="password" name='pass' placeholder='********' />
                    <button type="submit" className="btn btn-primary col-12">Submit</button>
                </form>
            </div>
        )
    }
}

interface Props {
    arr : []
  }
  
  interface State {
      username: String,
      password: String,
      email: String,
      number: number
  }

export default Register