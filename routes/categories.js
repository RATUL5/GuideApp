var express=require('express');
var router=express.Router();
var guides=require('../models/model1');

router.get('/:categories',function(req,res,next){
	guides.find({categories:req.params.categories},function(err,guides){
        if(err){
        	return next(err);
        }
        else{
        	res.json(guides);
        }
	})
});

module.exports=router;