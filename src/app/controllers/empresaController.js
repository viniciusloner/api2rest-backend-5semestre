const express = require('express')
const router = express.Router()
const Empresa = require('../models/empresaModel')

router.post('/cadastrarEmpresa', async (req, res) => {
    try{
        const empresa = await Empresa.create(req.body)
        return res.send(empresa)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.get('/consultarEmpresa', async (req, res) =>{
    try{
        const empresa = await Empresa.find().populate('Grupo')
        return res.send(empresa)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.get('/consultarEmpresa/:_id', async (req, res) => {
    try{
        const empresa = Empresa.findById(req.params._id).populate('Grupo')
        return res.send(empresa)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.delete('/deletarEmpresa/:_id', async (req, res) => {
    try{
        await Empresa.findByIdAndDelete(req.params._id)
        return res.send(empresa)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.put('/editarEmpresa/:_id', async (req, res) => {
    try{
        const empresa = Empresa.findByIdAndUpdate(req.params._id)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

module.exports = app => app.use('/empresa', router)