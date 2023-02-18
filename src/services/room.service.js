const { stringify } = require('querystring');
const RoomModel = require('../models/RoomModel')

class RoomService {

// To create many room types (Must have codeName, prize)
async create(roomData) {
    return await RoomModel.create(roomData, {      
    });
}

// Edit room type 
async update(id, roomUpdate) {
    return await RoomModel.findByIdAndupdate(id, update, {
        new: true
    });
}

// Delete Room type 
async delete(id) {
    return await RoomModel.findByIdAndDelete(id)
}

// Fetch single room type with id
async fetchone(id) {
    return await RoomModel.findById(id)
}

// Fetch many room types
async fetch(filter) { 
    return await RoomModel.find(filter) 
}


// Search and filter rooms based on its name, types and prices
async fetch(roomName, roomType, maxPrice, minPrice) { // filter, search
    return await RoomModel.find(roomName, roomType, maxPrice, minPrice) // filter, search
  }
}

module.exports = new RoomService()