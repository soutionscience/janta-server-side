const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    first_name: String,
    second_name: String,
    last_name: String,
    skill: String,
    About: String,
    number: String,
    total_earned: String,
    last_earned: String,
    company_name: String,
    amount_paid: String,
    jobs: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'job'
    }],
    average_rating: Number,
    last_rating: Number,
    completion_rate: Number,
    assigned_jobs: Number,
    completed_jobs: Number,
    status: {type: Boolean, default: false},
    status_desc: String,
    accountBal: Number,
    employer: {type: Boolean, default: false},
    profession: String
})
User.index({skill: 'text'})

module.exports = mongoose.model('User', User)