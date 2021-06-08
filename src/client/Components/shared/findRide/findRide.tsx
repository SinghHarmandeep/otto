
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
            time: '',
            phone: '',
            name: '',
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
                                name={this.state.name}
                                phone={this.state.phone}
                                setDetails={this.setDetails}
                                submit={this.handleSubmit}
                            />
                            <div style={{ position: 'absolute', right: '3px', top: '50px', pointerEvents: 'none' }}>
                                <svg width="6" height="100">
                                    <line x1="0" y1="0" x2="0" y2="100"
                                        stroke='white'
                                        strokeDasharray="5,5"
                                        strokeWidth="6" />
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
    setDetails = (key: string, val: string) => {
        switch (key) {
            case 'orgn':
                this.setState({ orgn: val })
                break;
            case 'dest':
                this.setState({ dest: val })
                break;
            case 'phone':
                this.setState({ phone: val })
                break;
            case 'name':
                this.setState({ name: val })
                break;
            case 'item':
                this.setState({ item: val })
                break;
            case 'inst':
                this.setState({ inst: val })
                break;
            case 'date':
                this.setState({ date: val })
                break;
            case 'time':
                this.setState({ time: val })
                break;
            default:
                break;
        }
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let res = request('/findride', 'POST',
            {
                data: {
                    pickup: this.state.orgn,
                    dropoff: this.state.dest,
                    contactName: this.state.name,
                    contactpPhone: this.state.phone,
                    item: this.state.item,
                    inst: this.state.inst,
                    date: this.state.date,
                    time: this.state.time,
                }
            })
        res.then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
            this.showAlert('you must be logedin to make this request!')
        });
    }

    showAlert = (msg: string) => alert(msg)
}

const mapStyle = {
    position: 'fixed' as 'fixed',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundColor: '#212529',
    overflowY: 'hidden' as 'hidden'
}
interface IFormState {
    orgn: string,
    dest: string,
    key: string,
    item: string,
    inst: string,
    date: string,
    time: string,
    phone: string,
    name: string,
}
interface IFormProps extends RouteComponentProps { }

export default FindRide;