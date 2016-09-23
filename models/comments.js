var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentsSchema = new Schema({
	name:{ 
		type: String, 
		required: false 
	},
	email:{ 
		type: String, 
		required : true
	},
	comments : {
		type :String,
		required: true
	},
	number :{
		type : Number,
		required :true
	}
});
module.exports = mongoose.model('comments', commentsSchema);
