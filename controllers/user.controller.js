let User = require('../models/freelance.model');
let Jobs = require('../models/jobs.model')
const fetch = require("node-fetch");



exports.post = (req, res, next)=>{
    console.log("me ", req.body.number)
    let query = {number: req.body.number}  // must match number by removing zero and making sure its 9 numbers

     User.findOne(query).exec((err, resp)=>{
         if(resp) { console.log('hitting find');res.status(400).send({"error":"already registered"})}
       else{ console.log('why not saving?', req.body)  
           let newUser = new User(req.body);
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
// jobs controllers
exports.postJobs = (req, res, next)=>{
    console.log('hitting post jobs')
let newJob = new Jobs(req.body)
    newJob.save((err, resp)=>{
        if(!resp){ res.status(400).send({"Error": "Problem saving job"})}
        else{
            User.findById(req.params.id)
            .exec((err, user)=>{
                if(err || !user){
                    console.log('what is erro ', err)
                    res.status(400).send({"error": "error finding user with id"})
                }
                user.jobs.push(resp._id);
                user.save((err, resp)=>{
                    if(err || !resp){
                        console.log("error adding job")
                        res.status(400).send({"error": "adding job to user"})
                    }
                    res.status(200).json(resp)
                })
            })

        }
    })
    
}

exports.delete = (req, res, next)=>{
//  User.deleteMany({})
//  .exec((err, resp)=>{
//     if(err) res.status(400).send(err)
//     res.status(200).json(resp)
// })
}
// shows casual workers based on category
exports.getCategory = (req, res, next)=>{
    console.log('user category ', req.params.id)

    let query = {category: req.params.id}
    User.find(query)
    .exec((err, resp)=>{
        if(err){
            res.status(400).send(err)
        }
        res.status(200).json(resp)
    })

}