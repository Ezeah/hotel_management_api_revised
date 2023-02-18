const { stringify } = require("querystring")
const RoomModel = require("./room.model")

const mongoose = requre('mongoose')

const User = new mongoose.Schema ({
    name: {
     type: string,
     required: true,
     unique: true,
     lowercase: true,
     trim: true,   
    },
    password: {
        type: string && number,
        required: true,
        unique: true,
        trim: true,
    },
    role: {
        type: string,
        required: true,
        unique: true,
        trim: true,
        enum: ['admin', 'guest'],
        default: admin
    },
},
{
    timestamps: true,
})

const UserModel = mongoose.model(user, User)
module.exports = RoomModel