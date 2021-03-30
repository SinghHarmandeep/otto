import * as dotenv from 'dotenv';

dotenv.config();

export default {
    // GMapAPI: process.env.G_MAP_API,
    MongoURI: process.env.MONGOURI,
    auth: {
        secret: process.env.SECRET
    }
}