var mongoose = require('mongoose')
var Schema = mongoose.Schema

var compositorSchema = new Schema({
    nome: {type: String, required: true},
    bio: {type: String, required:true},
    datanasc: {type: String, required: true},
    databio: {type: String, required:true},
    periodo: {type: String, required:true},
})

module.exports = mongoose.model('Compositor', compositorSchema, 'compositores') 