var mongoose=require('mongoose');

var guideSchema=new mongoose.Schema({
	title:String,
	img:String,
	body:String,
	categories:String
})

module.exports=mongoose.model('guide',guideSchema);