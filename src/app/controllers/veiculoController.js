const express = require('express')
const router = express.Router()
const Veiculo = require('../models/veiculoModel')

router.post('/cadastrarVeiculo', async (req, res) => {
    try{
        const veiculo = await Veiculo.create(req.body)
        return res.send(veiculo)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.get('/consultarVeiculo', async (req, res) => {
    try{
        const veiculo = await Veiculo.find().populate('Empresa')
        return res.send(veiculo)
    }catch(err){
        return res.status(400).send({ error: err }) 
    }
})

router.get('/consultarVeiculo/:_id', async (req, res) => {
    try{
        const veiculo = await Veiculo.findById(req.params.body).populate('Empresa')
        return res.send(veiculo)
    }catch(err){
        return res.status(400).send({ error: err }) 
    }
})

router.put('/editarVeiculo/:id', async (req, res) => {
    try{
        const veiculo = await Veiculo.findByIdAndUpdate(req.params.body)
        return res.send(veiculo)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.delete('/deletarVeiculo/:_id', async (req, res) => {
    try{
        const veiculo = await Veiculo.findByIdAndDelete(req.params.body)
        return res.send(veiculo)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

module.exports = app => app.use('veiculo', router)