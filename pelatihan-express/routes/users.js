var express = require('express');
const { getUser, formCreateUser, detailUser } = require('../controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', getUser);
router.get('/create', formCreateUser);
router.get('/detail/:id', detailUser);

module.exports = router;
