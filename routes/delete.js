///Dependencies
const express = require('express');
const router = express.Router();
//include DB Schema
const invoiceModel = require('../models/invoice');


//routes used
router.delete('/:invoiceId', (req, response) => {

    invoiceModel.deleteOne({
        _id: req.params.invoiceId
    }, (err) => {
        if (err) {
            console.log('ERROR' + err);
            response.status(500).json({ message: 'Problems when connecting to the server' });
        } else {
            console.log('The invoice was removed from MongoDB.');
            response.status(200).json({ message: 'The invoice was removed from MongoDB' });
        }
    });
});

//Export
module.exports = router;