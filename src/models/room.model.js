const { type } = require("os");
const { stringify } = require("querystring");

const mongoose = require('mongoose');

const Room = new mongoose.Schema ({
    name: {
        type: string,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
    },
    roomType: {
        type: Schema.Type.ObjectId,
        ref: roomType,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
},
    {
        timestamps: true,
})

const RoomModel = mongoose.model('Room', Room)
module.exports = RoomModel