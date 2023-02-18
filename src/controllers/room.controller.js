const roomService = require("../services/room.service")



class RoomController {

// To create many room types (Must have codeName, prize)
async createRoom(req, res) {
    const reqBody = req.body

    const existingRoom = await RoomService.fetchOne({
        name: reqBody.name.lowercase()
    })

    if(existingRoom) res.status(403).json({
        success: false,
        message: "Room already exist."
    })

    const newRoom = await RoomService.create(reqBody) 
    res.status(201).json({
        success: true,
        message: "Room created successfully",
        data: newRoom
    })
}

// Edit room type 
async updateRoom(req, res) {
    const roomId = req.params

    const existingRoom = await RoomServvice.fetchOne({
        _id: roomId
    })

    if(existingRoom) res.status(403).json({
        succcess: false,
        message: "Room doesn't exit"
    })

    if(updateData.name) {
        const existingRoomWithUpdateName = await RoomService.fetchOne({
            name: updateData.name.lowercase() // update price, room type
        })

        if(existingRoomWithUpdateName._id.toString() !== existingBRok._id.toSpring()) {
            res.status(403).json({
                success: false,
                message: "Room with same name already exist"
            })
        }   
    }

    const updateData = await roomService(roomId, updateData)
    res.status(200).json({
        success: true,
        message: "Room updated successfully",
        data: updateData
    })
}

// Delete Room type
async deleteRoom(req, res) {
    const Roomid = req.params

    const existingRoom = await RoomService.fetchOne({
        _id: roomId
    })

    if(!existingRoom) res.status(403).json({
        success: false,
        message: "Room to delete doesn't exit"
    })

    const deleteRoom = await RoomService.delete(roomId)
    res.status(200).json({
        success: true,
        message: "Room deleted successfully",
        data: deleteData
    })
}

// Fetch single room type with id
async fetchOneRoom(req, res) {
    const roomId = req.params.id

    const existingRoom = await RoomService.fetchOne({
        _id: roomId
    })

    if(!existingRoom) res.status(403).json({
        success: false,
        message: "Room to be fetched doesn't exist",
    })

    res.status(200).json({
        success: true,
        message: "Room fetched successfully",
        data: existingRoom
    })
}

// Fetch many room types
async fetchMany(req, res) {
    const existingRoom = await RoomService.fetchMany({})

    res.status(200).json({
        success: true,
        message: "Rooms fetched successfully",
        data: fetchedRooms
    })
}

// Search and filter rooms based on its name, types and prices    
}

module.exports = new RoomController()