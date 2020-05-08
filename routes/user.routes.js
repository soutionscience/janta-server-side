var express = require('express');
var router = express.Router();
let controller = require('../controllers/user.controller')

/* GET users listing. */
router.route('/')
.get(controller.get)
.post(controller.post)
.delete(controller.delete)

router.route('/search')
.get(controller.searchOne)

router.route('/:id')
.post(controller.postJobs)


router.route('/category/:id')
.get(controller.getCategory)




module.exports = router;
