const express = require('express')
const router = express.Router()

const{login, dashboard} = require('../main/controllers/main')

const authMiddleware = require('../main/middleware/auth')

router.route('/dashboard').get(authMiddleware,dashboard)
router.route('/login').post(login)


module.exports = router
