///Dependencies
const express = require('express');
const router = express.Router();
//include DB Schema
const invoiceModel = require('../models/invoice');


//routes used
router.get('/',(req, response) => {
    response.send('<h1>Hello from router Delete!</h1>')
});

//Export
module.exports = router;