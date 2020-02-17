const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let job= new Schema ({
    title: String,
    desc: String,
    budget: String,
    active: Boolean,
    assinged: {type: Boolean, default:false}
});


module.exports = mongoose.model('job', job)