const mongoose = require('../../database/index')
const Schema = mongoose.Schema

const LavagemSchema = new Schema({
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
    idFornecedor: {
        type: Schema.Types.ObjectId,
        ref: 'Fornecedor',
        required: true 
    },
    data: Date,
    valor: Number,
    kmSaida: Number,
    serviço: String,
    obs: String,
})

const Lavagem = mongoose.model('Lavagem', LavagemSchema)

module.exports = Lavagem