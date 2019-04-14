const express = require('express')
const router = express.Router()
const Lavagem = require('../models/LavagemModel')

router.post('/cadastrarLavagem', async (req, res) =>{
    try{
        const lavagem = await Lavagem.create(req.body)
        return res.send(lavagem)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.get('/consultarLavagem', async (req, res) => {
    try{    
        const lavagem = await Lavagem.find().populate('Empresa')
        return res.send(lavagem)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.get('/consultarLavagem/:_id', async (req, res) => {
    try{
        const lavagem = Lavagem.findById(req.params._id).populate('Empresa')
        return res.send(lavagem)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.put('/editarLavagem/:_id', async (req, res) =>{
    try{
        const lavagem = Lavagem.findByIdAndUpdate(req.params.body)
        return res.send(lavagem)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.delete('/deletarLavagem/:_id', async (req, res) => {
    try{
        const lavagem = Lavagem.findByIdAndDelete(req.params.body)
        return res.send(lavagem)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

module.exports = app => app.use('/lavagem', router)