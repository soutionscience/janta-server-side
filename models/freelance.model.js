const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let freelancer = new Schema({
    first_name: String,
    second_name: String,
    last_name: String,
    total_earned: String,
    last_earned: String,
    jobs: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'job'
    }],
    average_rating: Number,
    last_rating: Number,
    completion_rate: Number,
    assigned_jobs: Number,
    completed_jobs: Number,
})


module.exports = mongoose.Schema('freelancer', freelancer)