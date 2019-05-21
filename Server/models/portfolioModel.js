const Mongoose=require('mongoose');
const Schema =Mongoose.Schema;


const portfolioschema= new Schema({
    userId: {type:String, required:true},
    title: {type:String, required:true, maxlength: 256},
    company: {type:String, required:true, maxlength: 256},
    location: {type:String, required:true, maxlength: 128},
    position:{type:String, required:true, maxlength: 256},
    description:{type:String, required:true, maxlength: 2048},
    startDate:{type:Date, required:true},
    endDate:Date

});

module.exports= Mongoose.model('portfolio',portfolioschema);