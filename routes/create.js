///Dependencies
const express = require('express');
const router = express.Router();
//include DB Schema
const invoiceModel = require('../models/invoice');

//route POST 
router.post('/',(request, response) => {
    /// capture info from the window body ///
    const input = request.body;
    /// configure info for MongoDB connected to schema //
    const newDoc = new invoiceModel({
        sellerName: input.sellerName,
        sellerAddress: input.sellerAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.terms,
        invoiceDescription: input.invoiceDescription
    });
/// saving info to Mongo DB ///
   newDoc.save((err,doc) =>{
        if(err){ ///If error occurs
            console.log('ERROR'+ err);
            response.status(500).json({message:'Problems when saving DB info!'});
        } else{ //else response succesful
            console.log('The invoice was saved!');
            response.status(200).json({message:'The invoice was created!'});
        }
   });
});

//Export
module.exports = router;