const express = require('express')
const router = express.Router()
const Grupo = require('../models/grupoModel')

router.post('/cadastrarGrupo', async (req, res, next) => {
    try{
        const grupo = await Grupo.create(req.body) 
        return res.send(grupo)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.get('/consultarGrupo', async (req, res) => {
    try{
        const grupo = await Grupo.find().populate('Empresa')
        return res.send(grupo)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.get('/consultarGrupo/:_id', async (req, res) => {
    try{
        const grupo = await Grupo.findById(req.params._id).populate('Empresa')
        return res.send(grupo)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.put('/editarGrupo/:_id', async (req, res) => {
    try{
        const grupo = await Grupo.findByIdAndUpdate(req.params._id)
        return res.send(grupo)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})

router.delete('/deletarGrupo/:_id', async (req, res) => {
    try{
        await Grupo.findByIdAndDelete(req.params._id)
        return res.send(grupo)
    }catch(err){
        return res.status(400).send({ error: err})
    }
})


module.exports = app => app.use('/grupo', router)