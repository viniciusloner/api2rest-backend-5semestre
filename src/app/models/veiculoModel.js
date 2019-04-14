const mongoose = require('../../database/index')
const Schema = mongoose.Schema

const VeiculoSchema = new Schema({
    EmpresaRef: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    ultimoDono: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    }, 
    descricao: String,
    placa: String,
    marca: String,
    modelo: String,
    anoFab: Number,
    anoModelo: Number,
    cor: String,
    tipoComb: String,
    kmInicial: String,
    KmFinal: String,
    opcionais: {

    },
    chassi: String,
    numRef: String,
    
})

const Veiculo = mongoose.model('Veiculo', VeiculoSchema)

module.exports = Veiculo