const express = require('express');
const functions = require('../methods/actions');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('index.html');  
})

router.get('/dashboard', (req, res)=>{
    res.send('dashboard.html')
})

//@desc Adding new user
//@route POST /adduser
router.post('/adduser',functions.addNew)

//authentication
router.post('/auth',functions.authenticate)


module.exports = router;