let User = require('../models/freelance.model')


exports.post = (req, res, next)=>{
    let newUser = new User(req.body);
    newUser.save((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
}