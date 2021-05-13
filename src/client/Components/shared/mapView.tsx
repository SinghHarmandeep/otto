import React from 'react';


const mapStyle = {
    opacity: .8,
    backgroundColor: '#ccc',
    // position: 'fixed' as 'fixed', // cast string to type 'absolute'
    height: '100%',
    // zIndex: 1000
}

const mapView = (props: Iprops) => {

    let zoom: number = 7
    let url: string = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAebtXR13OqX48gqs4XqPckmWLglqZGmIo&origin=${props.orig}
    &destination=${props.dest}&zoom=${zoom}`

    return (
        <div
            style={mapStyle}
            className='rounded'
        >
            <iframe
                className='rounded'
                width="100%"
                height='100%'
                // style="border:0"
                loading="lazy"
                // allowfullscreen
                src={url}>
            </iframe>
        </div >
    )
}

export interface Iprops {
    orig: string,
    dest: string
}


export default mapView;