const express = require('express')
const router = express.Router()
const Recibo = require('../models/ReciboModel')

router.post('/cadastrarRecibo', async (req, res) =>{
    try{
        const recibo = await Recibo.create(req.body)
        return res.send(recibo)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.get('/consultarRecibo', async (req, res) => {
    try{    
        const recibo = await Recibo.find().populate('Empresa')
        return res.send(recibo)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.get('/consultarRecibo/:_id', async (req, res) => {
    try{
        const recibo = Recibo.findById(req.params._id).populate('Empresa')
        return res.send(recibo)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.put('/editarRecibo/:_id', async (req, res) =>{
    try{
        const recibo = Recibo.findByIdAndUpdate(req.params.body)
        return res.send(recibo)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.delete('/deletarRecibo/:_id', async (req, res) => {
    try{
        const recibo = Recibo.findByIdAndDelete(req.params.body)
        return res.send(recibo)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

module.exports = app => app.use('/recibo', router)