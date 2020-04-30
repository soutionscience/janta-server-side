let User = require('../models/freelance.model')
const fetch = require("node-fetch");



exports.post = (req, res, next)=>{
    console.log("me ", req.body.number)
    let query = {number: req.body.number}  // must match number by removing zero and making sure its 9 numbers

     User.findOne(query).exec((err, resp)=>{
         if(resp) {res.status(400).send({"error":"already registered"})}
       else{  let newUser = new User(req.body);
         newUser.save((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
}
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

exports.search = (req, res, next)=>{
    let query = {}
    User.find()
}