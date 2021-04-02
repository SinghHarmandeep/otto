import * as jwt from "jsonwebtoken";

import config from '../config';

export const createToken = (payLoad: Ipayload) => {
    return jwt.sign(
        payLoad,
        config.auth.secret,
        { expiresIn: config.auth.expiresIn }
    )
}
export interface Ipayload {
    handle: string,
    email: string,
    id: string,
}