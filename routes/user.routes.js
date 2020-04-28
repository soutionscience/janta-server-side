var express = require('express');
var router = express.Router();
let controller = require('../controllers/user.controller')

/* GET users listing. */
router.route('/')
.get(controller.get)
.post(controller.post)

router.route('/search')
.get(controller.searchOne)

module.exports = router;
