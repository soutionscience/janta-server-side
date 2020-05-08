const mongoose = require('mongoose')
const Schema = mongoose.Schema;


let category = new Schema({
  title: String,
  desc: String,
  image:String,
  subCategory: [{type: String}],
  skills: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'skills'},
  ],
  active: {type:Boolean, default:false}

})


module.exports = mongoose.model('category', category)