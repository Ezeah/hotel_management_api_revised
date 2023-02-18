const router = require('express').router()

const {
    createRoom, 
    updateRoom, 
    deleteRoom, 
    fetchOneRoom,  
    fetchMany 
} = require('../controllers/room.controller')

router.post('/', createRoom)
router.patch('/:id', updateRoom)
router.delete('/:id', deleteRoom)
router.get('/:id', fetchOneRoom)
router.get('/:id', fetchMany)

module.exports = router()