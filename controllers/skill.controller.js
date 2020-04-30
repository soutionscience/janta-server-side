const Skill = require('../models/skills.model');

exports.post = (req, res, next)=>{
    let newSkill = new Skill(req.body);
    newSkill.save((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
}

exports.get = (req, res, next)=>{
    Skill.find({})
    .exec((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
}


exports.searchOne = (req, res, next)=>{
    let q= req.params.s;
   // console.log('hitting seach with ',q)


    let $regex = new RegExp(q)
//console.log($regex)
     Skill.find({
         "name":{$regex : new RegExp(q),  $options: 'i' }
     }).exec((err, resp)=>{
         if(err) res.status(400).send(err)
         res.status(200).json(resp)
     })



}
