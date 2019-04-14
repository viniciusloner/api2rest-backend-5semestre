const express = require('express')
const router = express.Router()
const Fornecedor = require('../models/fornecedorModel')

router.post('/cadastrarFornecedor', async (req, res) => {
    try{
        const fornecedor = await Fornecedor.create(req.body)
        return res.send(fornecedor)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.get('/consultarFornecedor', async (req, res) => {
    try{
        const fornecedor = await Fornecedor.find().populate('Empresa')
        return res.send(fornecedor)
    }catch(err){
        return res.status(400).send({error: err})
    }
})

router.get('/consultarFornecedor/:_id', async (req, res) => {
    try{
        const fornecedor = await Fornecedor.findById(req.params._id).populate('Empresa')
        return res.send(fornecedor)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.put('/editarFornecedor/:_id', async (req, res) => {
    try{
        const fornecedor = await Fornecedor.findByIdAndUpdate(req.params._id)
        return res.send(fornecedor)
    }catch(err){
        return res.status(400).send({ error: err}) 
    }
})

router.delete('/deletarFornecedor/:_id', async (req, res) => {
    try{
        const fornecedor = await Fornecedor.findOneAndDelete(req.params._id)
        return res.send(fornecedor)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

module.exports = app => app.use('/fornecedor', router)