const express = require('express')
const router = express.Router()
const Combustivel = require('../models/combustivelModel')

router.post('/cadastrarCombustivel', async (req, res) =>{
    try{
        const combustivel = await Combustivel.create(req.body)
        return res.send(combustivel)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.get('/consultarCombustivel', async (req, res) => {
    try{    
        const combustivel = await Combustivel.find().populate('Empresa')
        return res.send(combustivel)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.get('/consultarCombustivel/:_id', async (req, res) => {
    try{
        const combustivel = Combustivel.findById(req.params._id).populate('Empresa')
        return res.send(combustivel)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.put('/editarCombustivel/:_id', async (req, res) =>{
    try{
        const combustivel = Combustivel.findByIdAndUpdate(req.params.body)
        return res.send(combustivel)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.delete('/deletarCombustivel/:_id', async (req, res) => {
    try{
        const combustivel = Combustivel.findByIdAndDelete(req.params.body)
        return res.send(combustivel)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

module.exports = app => app.use('/combustivel', router)