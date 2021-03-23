import mongoose from "mongoose";

const Users = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    },{
        timestamps: true
    }
)