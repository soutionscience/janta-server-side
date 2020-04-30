const express = require('express');
const router = express.Router()

const Controller = require('../controllers/skill.controller')

router.route('/')
.post(Controller.post)
.get(Controller.get)

router.route('/search')
.get(Controller.searchOne)

router.route('/search/:s')
.get(Controller.searchOne)

module.exports = router