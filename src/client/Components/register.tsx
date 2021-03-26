import React from 'react';

class Register extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className= 'container'>
                <h1>Register</h1>
                <form action="../register" method='POST'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="" placeholder='Almighty' />
                    <br /><br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="" placeholder='takeit@drop.off' />
                    <br /><br />
                    <label htmlFor="phone">Phone no:</label>
                    <input type="number" name="phone" id="" placeholder='123456789' />
                    <br /><br />
                    <label htmlFor="pass">Password</label>
                    <input type="password" name='pass' placeholder='********' />
                    <br /><br />
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