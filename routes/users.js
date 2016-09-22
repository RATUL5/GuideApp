var express = require('express');
var router = express.Router();
var guides=require('../models/model1');

/* GET users listing. */
router.get('/',function(req,res,next){
	guides.find({},function(err,guides){
		if(err){
			return next(err);
		}
		else{
			res.json(guides);
		}
	})
});

router.post('/',function(req,res,next){
	var guide=new guides(req.body);
	guide.save(function(err,guide){
		if(err){
			return next(err);
		}
		else{
			res.json(guide);
		}
	})
});

router.get('/:id',function(req,res,next){
	guides.findOne({_id:req.params.id},function(err,guide){
		if(err){
			 console.log(err);
			return next(err);
		}
		else{
			res.json(guide);
		}
	})
});
router.delete('/:id',function(req,res,next){
	guides.remove({_id:req.params.id},function(err,guide){
		if(err){
			return next(err);
		}
		else{
			res.json(guide);
		}
	})
})

module.exports = router;
