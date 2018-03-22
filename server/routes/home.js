
// const db = require('../database')  // must use to make all the REST calls
var express = require('express');
var router = express.Router();

//Require controller modules
var userController = require('./controllers/homeCtrl')

var userCtrl = require('./controllers/homeCtrl')
router.get('/',userCtrl.userList); // localhost:4200/home/

module.exports = router;