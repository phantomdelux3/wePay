const mongoose = require('mongoose');


const run = async()=> (await mongoose.connect('mongodb+srv://admin:22584132@admin.ordu4ib.mongodb.net/?retryWrites=true&w=majority&appName=admin'))
run()


const userSchema = new mongoose.Schema({
    Uinfo: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        dob: { type: Date, required: true }
    },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

const AccountSchema = new mongoose.Schema({
    Account_User : {type: mongoose.Schema.Types.ObjectId, ref : "User" , required:true , unique:true},
    balance: {type: Number,required:true}

})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account',AccountSchema);

module.exports = {
    User : User,
    Account : Account,
    db : run,
}
