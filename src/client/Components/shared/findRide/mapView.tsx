import React from 'react';
import { request } from '../../../utils/app';


const mapView = (props: Iprops) => {


    let res = request('../getapi', 'GET');
    res.then(res => console.log(res)
    ).catch(err => console.log('found an errorrrr')
    )

    let key = null;

    let zoom: number = 7
    let url: string = `https://www.google.com/maps/embed/v1/directions?key=${key}&origin=${props.orig}
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
    dest: string
}


export default mapView;