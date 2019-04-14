const express = require('express')
const router = express.Router()
const Cliente = require('../models/clientesModels')

router.post('/cadastrarCliente', async (req, res) => {
    try{
        const cliente = await Cliente.create(req.body)
        return res.send(cliente)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.get('/consultarCliente', async (req, res) => {
    try{
        const cliente = await Cliente.find().populate('Grupo', 'Empresa')
        return res.send(cliente)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.get('/consultarCliente/:_id', async (req, res) => {
    try{
        const cliente = await Cliente.findById(req.params.body).populate('Grupo', 'Empresa')
        return res.send(cliente)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.put('/editarCliente/:_id', async (req, res) => {
    try{
        const cliente = await Cliente.findByIdAndUpdate(req.params.body)
        return res.send(cliente)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.delete('/deletarCliente/:_id', async (req, res) => {
    try{
        const cliente = await Cliente.findByIdAndDelete(req.params.body)
        return res.send(cliente)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

module.exports = app => app.use('cliente', router)