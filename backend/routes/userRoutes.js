const express = require('express')
const router = express.Router()
const { getAllUsers, addUser, updateUser, deleteUser} = require('../controllers/userController')


router.get('/all', getAllUsers)
router.post('/add', addUser)
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)



module.exports = router 