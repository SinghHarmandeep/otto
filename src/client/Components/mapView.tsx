import React from 'react';

const mapView = () => {
    let dd: string = `sdfs`
    return (
        <div>
            <iframe
                width="100%"
                height='600'
                // style="border:0"
                loading="lazy"
                // allowfullscreen
                src='https://www.google.com/maps/embed/v1/place?key=${dd}&q=Space+Needle,Seattle+WA'>
            </iframe>
            <p>{dd}</p>
        </div>
    )
}

export default mapView;