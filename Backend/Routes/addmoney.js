const express = require('express');
const router = express.Router()
const JWT_auth = require('../Middleware/JWT_auth')
const { default: mongoose } = require('mongoose');
const { User, Account } = require('../Database/db');


router.post("/" ,JWT_auth, async (req , res , next)=> {
    const amount = req.body.amount;
    const to_account = req.body.to_Account;
    const from_account = req.body.username;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const first_user = await User.findOne({ username: from_account }).session(session);
        if (!first_user) {
            console.log(from_account)
            await session.abortTransaction();
            return res.status(404).json({message : "user not found !! "});
        }
        
        const second_user = await User.findOne({ username: to_account }).session(session);
        if (!second_user) {
            await session.abortTransaction();
            return res.status(404).json({message :"User to transfer money not found!" }) ;
        }
        
        const sender_account = await Account.findOne({ Account_User: first_user._id }).session(session);
        if (sender_account.balance < amount) {
            await session.abortTransaction();
            return res.status(404).json ({message :"Insufficient balance"});
        }
        
        // Deduct amount from the sender's account
        await Account.updateOne({ Account_User: first_user._id }, { $inc: { balance: -amount } }).session(session);
                
        // Add amount to the recipient's account
        await Account.updateOne({ Account_User: second_user._id }, { $inc: { balance: amount } }).session(session);
        
        // Commit the transaction
        await session.commitTransaction();
        console.log('Transaction successful');
        return res.status(200).json({message : 'Transaction successful' }) ;
        
    } catch (error) {
        console.error('Transaction failed:', error);
        await session.abortTransaction();
        return res.status(500).json({ message: "Transaction failed!" , error : error });
    } finally {
        session.endSession();
    }
})

module.exports = router 