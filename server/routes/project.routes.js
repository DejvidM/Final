const MovieRoutes = require('../controllers/project.controller');

module.exports = (app) => {
    app.get('/api/movie' , MovieRoutes.AllMovies);
    app.get('/api/movie/:_id' , MovieRoutes.OneMovie);
    app.delete(`/api/movie/:_id` , MovieRoutes.removeMovie );
    app.patch('/api/movie/:_id' , MovieRoutes.changeReview);
    app.post('/api/movie', MovieRoutes.NewMovie )
    app.patch('/api/user/:_id' , MovieRoutes.AddUser);
}