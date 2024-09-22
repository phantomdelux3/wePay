const express = require('express');
const router = express.Router();
const {User, Account} = require('../Database/db');
const jwt = require('jsonwebtoken')
const token = require('../config')


router.post("/", async (req,res,next)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
    try {
        const user_get = await User.findOne({
            $or: [
                {username},//username and password should be unique.
                {email}    // unique : True
            ]
        })

        if(!user_get){
            res.status(404).json({message: "user not found!!"})
        }
        

        if(user_get.password != password){
            res.status(404).json({message: "Password is incorrect!"})
        }
        const user_account = await Account.findOne({
            Account_User: user_get._id
        })
        const auth = await jwt.sign({user_get} ,token);
        
        res.status(200).json({
            message : "Loged in.",
            Authentication : auth , 
            user_info : user_get , 
            Account_balance : user_account.balance,
        })

    } catch (error) {
        
    }
})



module.exports = router