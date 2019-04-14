const mongoose = require('../../database/index')
const Schema = mongoose.Schema

const ReciboSchema = new Schema({
    EmpresaRef: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    ClienteRef: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    dataRecibo: Date,
    dataEntregue: Date,
    texto: String,
    valor: String,
    obs: String,
    
})

const Recibo = mongoose.model('Recibo', ReciboSchema)

module.exports = Recibo