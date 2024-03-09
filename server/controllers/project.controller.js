const Movie = require('../models/project.model');


module.exports.AllMovies = (req , res) => {
    Movie.find()
        .then((movies) => res.json(movies))
        .catch((err) => res.json(err))
}
module.exports.OneMovie = (req , res) => {
    Movie.findOne({_id : req.params._id})
        .then((oneMovie) => res.json(oneMovie))
        .catch((err) => res.json(err))
}

module.exports.removeMovie = (req , res) => {
    Movie.deleteOne( {_id : req.params._id})
        .then((deleted) => res.json(deleted))
        .catch((err) => res.json(err))
}

module.exports.changeReview = (req , res) => {
    Movie.updateOne({ _id : req.params._id} , req.body , {runValidators : true})
        .then((changedReview) => res.json(changedReview))
        .catch((err) => res.json(err))
}

module.exports.NewMovie = (req , res) => {
    Movie.create(req.body)
        .then((newMovie) => res.json(newMovie))
        .catch((err) => res.status(400).json(err))
}

module.exports.AddUser = (req ,res ) => {
    Movie.updateOne({_id : req.params._id} , {$push : {userName : req.body}} , {runValidators : true})
        .then((updatedmovie) => res.json(updatedmovie))
        .catch((errors) => res.status(400).json(errors))
}
