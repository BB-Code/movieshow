/*
 * @Author: bobocde
 * @Description: 
 */
var mongoose = require('../common/db');
var comment = new mongoose.Schema({
    movie_id: String,
    username: String,
    context: String,
    check: Boolean
});

comment.statics.findByMovieId = function (movie_id, cb) {
    this.find({ movie_id: movie_id, check: true }, cb);
}
comment.statics.findAll = function (cb) {
    this.find({}, cb);
};

var commentModel = mongoose.model('Comment', comment);

module.exports = commentModel;