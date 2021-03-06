const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let employer = new Schema({
    first_name: String,
    second_name:String,
    profile_picture: String,
    company_name: String,
    amount_paid: String,
    rating: Number,
    jobs: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'job'
    }],
    status: Boolean,
    accountBal: Number

})

module.exports = mongoose.model('employer', employer)