
import React, { FormEvent } from 'react';
import { request, getAccessToken } from "../../../utils/app";

import Map from './mapView';
import Detials from './detailsForm';
import { RouteComponentProps } from 'react-router-dom';

class FindRide extends React.Component<IFormProps, IFormState> {

    constructor(props: any) {
        super(props);
        this.state = {
            orgn: '',
            dest: '',
            key: '',
            item: '',
            inst: '',
            date: '',
            time: ''
        }
    }

    componentDidMount() {
        if (getAccessToken()) {
            let res = request('../getapi', 'GET');
            res.then(res => {
                this.setState({ key: res.data })
            }).catch(err => console.log(err))
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                {(!getAccessToken()) ? (<div />) : (
                    <div>
                        <h1 className='text-center text-dark'>Get your Right Hand Man</h1 >
                        <p className='text-center text-dark'>Enter Package Details</p>
                        <div className='col-4 bg-dark mx-2 rounded shadow-lg'
                            style={{ position: 'relative' }} >
                            < Detials
                                dest={this.state.dest}
                                orgn={this.state.orgn}
                                item={this.state.item}
                                inst={this.state.inst}
                                time={this.state.time}
                                date={this.state.date}
                                setItem={this.setItem}
                                setPickUp={this.setPickUp}
                                setDropOff={this.setDropOff}
                                setInst={this.setInst}
                                setDate={this.setDate}
                                setTime={this.setTime}
                                submit={this.handleSubmit}
                            />
                            <div style={{ position: 'absolute', right: '3px', top: '60px', pointerEvents: 'none' }}>
                                <svg width="6" height="100">
                                    <line x1="0" y1="0" x2="0" y2="100"
                                        stroke='white'
                                        strokeDasharray="5,5"
                                        stroke-width="6" />
                                </svg>
                            </div>
                        </div>
                        <div style={mapStyle}>
                            <Map
                                orig={(this.state.orgn) ? this.state.orgn : 'new york'}
                                dest={(this.state.dest) ? this.state.dest : 'new york'}
                                apiKey={this.state.key}
                            />
                        </div>
                    </div >)
                }
            </div>
        )
    }

    setItem = (val: string) => this.setState({ item: val })
    setTime = (val: string) => this.setState({ time: val })
    setDate = (val: string) => this.setState({ date: val })
    setInst = (val: string) => this.setState({ inst: val })
    setPickUp = (val: string) => this.setState({ orgn: val })
    setDropOff = (val: string) => this.setState({ dest: val })

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // setAuth(localStorage.getItem('token'))
        let res = request('/findride', 'POST',
            {
                data: {
                    pickup: this.state.orgn,
                    dropoff: this.state.dest,
                    item: this.state.item,
                    inst: this.state.inst,
                    date: this.state.date,
                    time: this.state.time
                }
            })
        res.then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
            this.showAlert('you must be logedin to make this request!')
        });
    }

    showAlert = (msg: string) => {
        alert(msg)
    }
}

const mapStyle = {
    // position: 'absolute' as 'absolute',
    position: 'fixed' as 'fixed',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundColor: '#212529',
    // backgroundColor: 'blue',
    overflowY: 'hidden' as 'hidden'
}
interface IFormState {
    orgn: string,
    dest: string,
    key: string,
    item: string,
    inst: string,
    date: string,
    time: string
}
interface IFormProps extends RouteComponentProps { }

export default FindRide;