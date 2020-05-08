const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let job= new Schema ({
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'category'},
    title: String,
    desc: String,
    budget: String,
    active: Boolean,
    assinged: {type: Boolean, default:false},
    paid: Boolean,
    worker:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    complete: Boolean

});


module.exports = mongoose.model('job', job)