const express = require('express');
const router = express.Router();
const database = require('../database') // connect to DATABASE

var indexCtrl = require('./controllers/indexCtrl')

//Localhost:4200/

// router.get('/', indexCtrl)

module.exports = router;