import React from 'react';
import config from '../../server/config';

const mapView = () => {


    let zoom: number = 7
    let url: string =  `https://www.google.com/maps/embed/v1/directions?key=${config.GMapAPI}&origin=Oslo+Norway
    &destination=Telemark+Norway&zoom=${zoom}`
    return (
        <div>
            <iframe
                width="100%"
                height='600'
                // style="border:0"
                loading="lazy"
                // allowfullscreen
                src={url}>
            </iframe>
        </div>
    )
}

export default mapView;