let User = require('../models/freelance.model')


exports.post = (req, res, next)=>{
    let newUser = new User(req.body);
    newUser.save((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
}

exports.get = (req, res, next)=>{
    User.find({})
    .exec((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
}

exports.searchOne = (req, res, next)=>{
     let q= req.body.q
 // full name search
 
    // console.log(q)
    // User.find({
    //     $text:{
    //         $search:q
    //     }
    // }).exec((err, resp)=>{
    //     if(err) res.status(400).send(err)
    //     res.status(200).json(resp)
    // })

    //partial name search
    let $regex = new RegExp(q)
   console.log($regex)
    User.find({
        "skill":{$regex : new RegExp(q),  $options: 'i' }
    }).exec((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
}