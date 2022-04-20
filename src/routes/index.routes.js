const {Router} = require('express')
const database = require('../database')
const userController = require('../controllers/userController')

//mongo conection
require('dotenv').config()
database();

const router = Router()

router.post('/userup', userController.userup)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)
router.get('/', userController.getTodos)


module.exports = router;