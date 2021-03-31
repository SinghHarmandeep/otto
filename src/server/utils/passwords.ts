import * as bcrypt from 'bcryptjs'

//method creates hash password
export const generateHash = (pass: string) => {
    const salt = bcrypt.genSaltSync(12)
    const hash = bcrypt.hashSync(pass, salt)
    return hash;
}

//method compare hash and password
export const compareHash = (pass: string, hash: string) => bcrypt.compareSync(pass, hash);
