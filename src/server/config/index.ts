import * as dotenv from 'dotenv';

dotenv.config();

// export default require(`./${process.env.NODE_ENV}`).default;
//add production, development.ts and add appropriate secure variables 
//or do the following

export default {
    GMapAPI: process.env.GMAPAPI,
    MongoURI: process.env.MONGOURI,
    auth: {
        secret: process.env.SECRET,
        expiresIn: process.env.EXPIRESIN
    }
}