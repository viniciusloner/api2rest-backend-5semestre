const mongoose = require('../../database/index')
const Schema = mongoose.Schema

const CombustivelSchema = new Schema({
    EmpresaRef: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    VeiculoRef: {
        type: Schema.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    },
    FornecedorRef: {
        type: Schema.Types.ObjectId,
        ref: 'Fornecedor',
        required: true
    },
    kmAbast: Number,
    valor: Number,
    litrosAbast: Number,
    precoLitro: Number,
    tipoCombust: String,
    obs: String,
    data: Date,

})

const Combustivel = mongoose.model('Combustivel', CombustivelSchema)

module.exports = Combustivel


