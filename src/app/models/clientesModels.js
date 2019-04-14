const mongoose = require('../../database/index')
const Schema = mongoose.Schema

const ClienteSchema = new Schema({
    GrupoRef: {
        type: Schema.Types.ObjectId,
        ref: 'Grupo',
        required: true
    },
    EmpresaRef: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    nomeFantasia: {
        type: String,
        required: true
    },
    razaoSocial: String,
    cnpjRg: String,
    ieRg: String,
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

const Cliente = mongoose.model('Cliente', ClienteSchema)

module.exports = Cliente