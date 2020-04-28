///Dependencies
const express = require('express');
const router = express.Router();
//include DB Schema
const invoiceModel = require('../models/invoice');


/// routes used ///
router.get('/all',(request, response) => {
/// read info from Mongo DB ///
    invoiceModel.find((err,doc) => {
        if(err){ ///If error occurs
            console.log('ERROR'+ err);
            response.status(500).json({message:'Problems when reading DB info!'});
        } else{ //else response succesful
            console.log('The invoice was found & read!');
            response.status(200).json(doc);
        }
    });
});

router.get('/api/:invoiceId',(request, response) => {
    /// read info from Mongo DB ///
        invoiceModel.findOne({
            _id : request.params.invoiceId
            },(err, invoice) =>{
                if(err){ ///If error occurs
                    console.log('ERROR'+ err);
                    response.status(500).json({message:'Problems when saving DB info!'});
                }else{ //else response succesful
                    console.log('The single invoice was located!');
                    response.status(200).json(invoice);
                }
        });
    });
/// routes ///

//Export
module.exports = router;