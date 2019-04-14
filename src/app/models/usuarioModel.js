const mongoose = require('../../database/index')
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
    GrupoRef:{
        type: Schema.Types.ObjectId,
        ref: 'Grupo',
        required: true
    },
    EmpresaRef:{
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    nome: String,
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    cpf: String,
    rg: String,
    tipo: String,
    endereco: {
        cep: String,
        logadouro: String,
        numero: String,
        bairro: String,
        complemento: String,   
        municipio: String,
        uf: String
    },
    contatos: {
        telefone1: String,
        telefone2: String,
        celular1: String,
        celular2: String,
        email1: String,
        email2: String,
        site: String
    },
    
})

const Usuario = mongoose.model('Usuario', UsuarioSchema)

module.exports = Usuario