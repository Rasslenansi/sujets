const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  nom: {type: String, required:true},
  prenom: {type: String, required:true},
  fonction: {type: String, required:true},
  rattach: {type: String, required:true},
  mail: {type:String, required:true},
  tel: {type: String, required:true}
});
module.exports = mongoose.model("contact", ContactSchema);
