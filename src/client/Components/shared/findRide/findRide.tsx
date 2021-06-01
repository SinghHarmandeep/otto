import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { getAccessToken } from '../../../utils/app';

import ItemForm from './form';


const temp = (props: any) => {
    const history = useHistory();
    useEffect(() => {
        if (!getAccessToken()) {
            history.push('/login')
        }
    })
    return (
        <div>
            {(!getAccessToken()) ? (
                <div></div>
            ) : (
                <div>
                    <h1 className='text-center text-dark'>Get your Right Hand Man</h1 >
                    <p className='text-center text-dark'>Enter Package Details</p>
                    <ItemForm />
                </div >)
            }
        </div>
    )
}

export default temp;