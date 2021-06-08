import React from 'react'

class Details extends React.Component<IDetailsProps> {
    constructor(props: any) {
        super(props)
        this.state = null;
    }

    render() {
        return (
            <form onSubmit={e => this.props.submit(e)}>
                <label className="mt-2"> <span className='text-danger'>*</span>Pick up address:</label>
                <input type="text" className="form-control"
                    value={this.props.orgn} required={true}
                    onChange={e => {
                        this.props.setDetails('orgn', e.target.value)
                    }} placeholder="123 pickup street" />

                <label className="mt-2"> <span className='text-danger'>*</span>Drop off address:</label>
                <input type="text" className="form-control"
                    value={this.props.dest} required={true}
                    onChange={e => { this.props.setDetails('dest', e.target.value) }} placeholder="123 drop street" />

                <div className="row mt-2">
                    <div className='col'>
                        <label> <span className='text-danger'>*</span>Recipient Name:</label>
                        <input className="form-control col" type="text"
                            value={this.props.name} placeholder='The Rock'
                            onChange={e => this.props.setDetails('name', e.target.value)} required={true} />
                    </div>

                    <div className='col'>
                        <label><span className='text-danger'>*</span>Recipient phone:</label>
                        <input className="form-control col" type="number"
                            value={this.props.phone} placeholder='(123)456-7890'
                            onChange={e => this.props.setDetails('phone', e.target.value)} required={true} />
                    </div>
                </div>

                <label className="mt-2"> <span className='text-danger'>*</span>Item Discription:</label>
                <input type="text" className="form-control"
                    value={this.props.item} required={true}
                    onChange={e => this.props.setDetails('item', e.target.value)}
                    placeholder="Book, Keys, Food, package..." />

                <div className="row mt-2">
                    <div className='col'>
                        <label> <span className='text-danger'>*</span>Pickup Date:</label>
                        <input className="form-control col" type="date"
                            value={this.props.date}
                            onChange={e => this.props.setDetails('date', e.target.value)}
                            required={true} />
                    </div>

                    <div className='col'>
                        <label><span className='text-danger'>*</span>Pickup Time:</label>
                        <input className="form-control col" type="time"
                            value={this.props.time}
                            onChange={e => this.props.setDetails('time', e.target.value)}
                            required={true} />
                    </div>
                </div>

                <label className="mt-2"> <span className='text-danger'>*</span>Special Instructions:</label>
                <textarea className="form-control" rows={1} value={this.props.inst} required={true}
                    onChange={e => this.props.setDetails('inst', e.target.value)}
                    placeholder="Leave by door, meet at sidewalk, fragile..." />

                <button type="submit" className="btn btn-primary col my-3">Get Quote!</button>
            </form >)
    }
}

interface IDetailsProps {
    dest: string, orgn: string,
    item: string, inst: string,
    time: string, date: string,
    phone: string, name: string,

    submit: any, setDetails: any
}

export default Details;