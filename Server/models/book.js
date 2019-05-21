const Mongoose=require('mongoose');
const Schema =Mongoose.Schema;


const bookschema= new Schema({
    title: String,
    author: String,
    pages: Number,
    price: Number

});

module.exports= Mongoose.model('book',bookschema);