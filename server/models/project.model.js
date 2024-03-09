const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'Name is required']
    },
    rating : {
        type : Number,
        required : [true , 'Rating is required'],
        max : [10, 'Maximum rating is 10'],
        min : [0 ,'Min rating is 0']
    },
    review : {
        type : String ,
        required : [true , 'Review is required']
    }
},
{
    timestamps : true
})

const MovieSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true , 'Movie title is required']
    },
    userName : [UserSchema],
},
{
    timestamps : true
})

const Movie = mongoose.model('Movie' , MovieSchema);

module.exports = Movie ;
