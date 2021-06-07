import React from 'react'

class Details extends React.Component<IDetailsProps> {
    constructor(props: any) {
        super(props)
        this.state = null;
    }

    render() {
        return (
            <form
                onSubmit={e => this.props.submit(e)}
                className='my-2'>

                <label className="mt-3"> <span className='text-danger'>*</span>Pick up address:</label>
                <input type="text" className="form-control"
                    value={this.props.orgn} name="pickup" required={true}
                    onChange={e => { this.props.setPickUp(e.target.value) }} placeholder="123 pickup street" />

                <label className="mt-3"> <span className='text-danger'>*</span>Item Discription:</label>
                <input type="text" className="form-control"
                    value={this.props.item} name="item" required={true}
                    onChange={e => this.props.setItem(e.target.value)} placeholder="Book, Keys, Food, package..." />

                <label className="mt-3"> <span className='text-danger'>*</span>Special Instructions</label>
                <input type="text" className="form-control"
                    value={this.props.inst} name="item" required={true}
                    onChange={e => this.props.setInst(e.target.value)} placeholder="Leave by door, meet at sidewalk, fragile..." />


                <label className="mt-3"> <span className='text-danger'>*</span>Drop off address:</label>
                <input type="text" className="form-control"
                    value={this.props.dest} name="dropoff" required={true}
                    onChange={e => { this.props.setDropOff(e.target.value) }} placeholder="123 drop street" />

                <div className="row mt-3">
                    <div className='col'>
                        <label> <span className='text-danger'>*</span>Pickup Date:</label>
                        <input className="form-control col" type="date"
                            value={this.props.date}
                            onChange={e => this.props.setDate(e.target.value)}
                            name="pickupdate" required={true} />
                    </div>

                    <div className='col'>
                        <label><span className='text-danger'>*</span>Pickup Time:</label>
                        <input className="form-control col" type="time"
                            value={this.props.time}
                            onChange={e => this.props.setTime(e.target.value)}
                            name="pickuptime" required={true} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary col my-3">Get Quote!</button>
            </form>)
    }
}

interface IDetailsProps {
    dest: string,
    orgn: string,
    item: string,
    inst: string,
    time: string,
    date: string,
    setPickUp: any,
    setDropOff: any,
    setItem: any,
    setInst: any,
    setTime: any,
    setDate: any
    submit: any
}

export default Details;