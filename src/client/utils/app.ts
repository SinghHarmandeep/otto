import axios, { Method } from 'axios';

export let AccessToken: string = localStorage.getItem('token') || null;

export let User: any = {
    userid: localStorage.getItem('userid') || null
}

export const request = async <T = any>(uri: string, method: Method = 'GET', body?: {}) => {
    return await axios({
        url: uri, 
        method: method,
        data: body
    })
}