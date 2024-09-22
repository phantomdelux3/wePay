const express = require('express');
const router = express.Router();
const {User , Account} = require('../Database/db');
const validation_middleware = require('../Middleware/validation_middleware')



router.post('/' ,validation_middleware,  async (req, res) => {
    
    try {
        const body = req.body
        const user = await User.create({
            username: body.username,
            password: body.password,
            email: body.email,
            Uinfo: {
                firstName: body.Uinfo.firstName,
                lastName: body.Uinfo.lastName,
                dob: body.Uinfo.dob,
                phoneNumber: body.Uinfo.phoneNumber
            }
        });
        await Account.create({
            Account_User: user._id,
            balance : 0,
        })

        res.status(201).json({message:'User created successfully <3'});

    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ message: "Internal server error!!!", error });
        }
    }
    
});

module.exports = router;
