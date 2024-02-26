const express = require('express');
let router = express.Router();

router.get('/',(rep,res)=>{
    res.send('users echo');
});

module.exports = router;
