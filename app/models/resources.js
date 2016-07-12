var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ResourceSchema   = new Schema({
    name: {type : String}
});

module.exports = mongoose.model('Resource', ResourceSchema);