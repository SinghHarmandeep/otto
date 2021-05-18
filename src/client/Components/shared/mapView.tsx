import React from 'react';


const mapStyle = {
    // position: 'fixed' as 'fixed', // cast string to type 'absolute'
    position: 'absolute' as 'absolute', // cast string to type 'absolute'
    height: '100%',
    width: '100%',
    // top: '0px',
    left: '0px'
}

const mapView = (props: Iprops) => {

    let zoom: number = 7
    let url: string = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDKe5rMchKpvr1eP9523FAAwF9nIMh2M8E&origin=${props.orig}
    &destination=${props.dest}&zoom=${zoom}`

    return (
        <div
            style={mapStyle}
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