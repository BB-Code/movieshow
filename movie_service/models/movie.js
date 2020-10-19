/*
 * @Author: bobocde
 * @Description: 
 */
var mongoose = require('../common/db');
var movie = new mongoose.Schema({
    movieName: String,
    movieImg: String,
    movieVideo: String,
    movieDownload: String,
    movieTime: String,
    movieNumSupport: Number,
    movieNumDownloads: Number,
    movieMainPage: Boolean
});

movie.statics.findById = function (movie_id, cb) {
    this.find({ _id: movie_id }, cb);
}

movie.statics.findByMovieName = function (movieName, cb) {
    this.find({ movieName: movieName }, cb);
};

movie.statics.findAll = function (cb) {
    this.find({}, cb);
};

var movieModel = new mongoose.model('Movie', movie);

module.exports = movieModel;