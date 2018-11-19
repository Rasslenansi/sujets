const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  id: {type: String, required:true},
  pass: {type: String, required:true}
});
module.exports = mongoose.model("contact", AdminSchema);
