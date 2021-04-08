import React from 'react';


const mapView = () => {


    let zoom: number = 7
    let url: string =  `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAebtXR13OqX48gqs4XqPckmWLglqZGmIo&origin=Oslo+Norway
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