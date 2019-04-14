const mongoose = require('../../database/index')
const Schema = mongoose.Schema

const GrupoSchema = new Schema({
    grupo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    EmpresaRef:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
})

const Grupo = mongoose.model('Grupo', GrupoSchema)

module.exports = Grupo