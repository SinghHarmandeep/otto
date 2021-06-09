import React from 'react';

class DriverPage extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='container-lg border justify-content-center'>
        <p className='col-2 text-center'>Make money when you want and how you want.</p>
        <p className='text-center'>You only need a few things to sign up to drive</p>
        <b>The following</b>
        <ul>
          <li>A car (bike in select areas)</li>
          <li>Valid Driver's Licence and Auto incurance</li>
          <li>Smartphone</li>
        </ul>
        <p>That's it</p>

        <div style={{position: 'absolute', top: '100px'}} className="alert alert-primary text-center .fade" role="alert">
          A simple primary alert—check it out!
        </div>
      </div>
    )
  }
}

export default DriverPage