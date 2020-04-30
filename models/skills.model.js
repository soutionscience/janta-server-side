const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let skill = new Schema({
    name: String
})

skill.index({name: 'text'})


module.exports = mongoose.model('skill', skill)