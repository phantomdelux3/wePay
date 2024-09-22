const express = require('express');
const signup = require('./signup');
const signin = require('./signin');
const addmoney = require('./addmoney')

const router = express.Router();

router.use("/signup", signup);
router.use("/signin", signin);
router.use("/addmoney", addmoney);


1
module.exports = router;
