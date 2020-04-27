///Dependencies
const express = require('express');
const router = express.Router();



//routes used
router.get('/',(req, response) => {
    response.send('<h1>Hello from router Read!</h1>')
});

//Export
module.exports = router;