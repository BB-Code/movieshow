/*
 * @Author: bobocde
 * @Description: 
 */
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/movieServer';

mongoose.connect(url, { useNewUrlParser: true });
module.exports = mongoose;