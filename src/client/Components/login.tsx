import React from 'react';

class Login extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className= 'container'>
                <h1>LogIn page</h1>
                <form action="../login" method='POST'>
                    <input type="text" name="email" id="" placeholder='Cockroach' />
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
      password: String
  }

export default Login