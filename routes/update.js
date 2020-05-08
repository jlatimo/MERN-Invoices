///Dependencies
const express = require('express');
const router = express.Router();
//include DB Schema
const invoiceModel = require('../models/invoice');


//routes used
router.get('/:invoiceId', (req, response) => {
    /// capture info from the window body ///
    const input = req.body;

    invoiceModel.updateOne({
        _id: req.params.invoiceId
    }, {
        /// configure info for MongoDB connected to schema //
        sellerName: input.sellerName,
        sellerAddress: input.sellerAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.terms,
        invoiceDescription: input.invoiceDescription
    }, (err) => {
        if (err) {
            console.log('ERROR' + err);
            response.status(500).json({ message: 'Problems when connecting to the server' });
        } else {
            console.log('The invoice was updated to MongoDB succesfully!');
            response.status(200).json({ message: 'The invoice was updated to MongoDB succesfully!' });
        }
    });
});

//Export
module.exports = router;