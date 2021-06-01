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

                <label className="mt-2">Pick up address:</label>
                <input type="text" className="form-control"
                    value={this.props.orgn} name="pickup"
                    onChange={e => { this.props.pickUp(e.target.value) }} placeholder="123 pickup street" />

                <label className="mt-2">Item Discription:</label>
                <input type="text" className="form-control" name="item" placeholder="Book, Keys, Food, package etc" />


                <label className="mt-2">Drop off address:</label>
                <input type="text" className="form-control"
                    value={this.props.dest} name="dropoff"
                    onChange={e => { this.props.dropOff(e.target.value) }} placeholder="123 drop street" />

                <div className="row mt-2">
                    <div className='col'>
                        <label>Date:</label>
                        <input className="form-control col" type="date" name="pickupdate" />
                    </div>

                    <div className='col'>
                        <label>Time:</label>
                        <input className="form-control col" type="time" name="pickuptime" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary col my-2">Let's go!</button>
            </form>)
    }
}

interface IDetailsProps {
    dest: string,
    orgn: string,
    pickUp: any,
    dropOff: any,
    submit: any
}

export default Details;