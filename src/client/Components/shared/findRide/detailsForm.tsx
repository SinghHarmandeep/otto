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

                <label className="mt-3">Pick up address:</label>
                <input type="text" className="form-control"
                    value={this.props.orgn} name="pickup"
                    onChange={e => { this.props.setPickUp(e.target.value) }} placeholder="123 pickup street" />

                <label className="mt-3">Item Discription:</label>
                <input type="text" className="form-control"
                    value={this.props.item} name="item"
                    onChange={e => this.props.setItem(e.target.value)} placeholder="Book, Keys, Food, package etc" />


                <label className="mt-3">Drop off address:</label>
                <input type="text" className="form-control"
                    value={this.props.dest} name="dropoff"
                    onChange={e => { this.props.setDropOff(e.target.value) }} placeholder="123 drop street" />

                <div className="row mt-3">
                    <div className='col'>
                        <label>Date:</label>
                        <input className="form-control col" type="date" name="pickupdate" />
                    </div>

                    <div className='col'>
                        <label>Time:</label>
                        <input className="form-control col" type="time" name="pickuptime" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary col my-3">Let's go!</button>
            </form>)
    }
}

interface IDetailsProps {
    dest: string,
    orgn: string,
    item: string,
    setPickUp: any,
    setDropOff: any,
    setItem: any,
    submit: any
}

export default Details;