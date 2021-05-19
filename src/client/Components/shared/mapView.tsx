import React from 'react';


const mapView = (props: Iprops) => {

    let zoom: number = 7
    let url: string = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAebtXR13OqX48gqs4XqPckmWLglqZGmIo&origin=${props.orig}
    &destination=${props.dest}&zoom=${zoom}`

    return (
        <iframe
            width="100%"
            height='100%'
            loading="lazy"
            style={{

            }}
            src={url}
        >

        </iframe>
    )
}

export interface Iprops {
    orig: string,
    dest: string
}


export default mapView;