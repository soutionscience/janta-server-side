const Category  = require('../models/category.model')

exports.post = (req, res, next)=>{
    let newCat = new Category(req.body)
    newCat.save((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
}

exports.get = (req, res, next)=>{
    Category.find({})
    .exec((err, resp)=>{
        if(err) res.status(400).send(err)
        res.status(200).json(resp)
    })
}

//delete all
exports.delete = (req, res, next)=>{
    Category.deleteMany()
    .exec((err, resp)=>{
       err? res.status(400).send(err): res.status(200).json(resp)
    })
}