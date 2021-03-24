import * as mongoose from "mongoose";
export interface UserI extends mongoose.Document {
    handle: string,
    email: string,
    password: string
}

const UserSchema: mongoose.Schema = new mongoose.Schema(
    {
        handle: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },{
        timestamps: true
    }
)

export default mongoose.model<UserI>('user', UserSchema);