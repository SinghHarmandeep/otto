import React, { useEffect, useState } from 'react';
import { request } from '../../../utils/app';



const mapView = (props: Iprops) => {

    let zoom: number = 7;


    let url: string = `https://www.google.com/maps/embed/v1/directions?key=${props.apiKey}&origin=${props.orig}
    &destination=${props.dest}&zoom=${zoom}`




    return (
        <iframe
            width="100%"
            height='100%'
            loading="lazy"
            src={url}
        >
        </iframe>
    )
}

export interface Iprops {
    orig: string,
    dest: string,
    apiKey: string
}


export default mapView;