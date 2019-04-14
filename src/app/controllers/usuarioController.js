const express = require('express')
const router = express.Router()
const Usuario = require('../models/usuarioModel')

router.post('/cadastrarUsuario', async (req, res) =>{
    try{
        const usuario = await Usuario.create(req.body)
        return res.send(usuario)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.get('/consultarUsuario', async (req, res) => {
    try{    
        const usuario = await Usuario.find().populate('Grupo', 'Empresa')
        return res.send(usuario)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.get('/consultarUsuario/:_id', async (req, res) => {
    try{
        const usuario = Usuario.findById(req.params._id).populate('Grupo', 'Empresa')
        return res.send(usuario)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.put('/editarUsuario/:_id', async (req, res) =>{
    try{
        const usuario = Usuario.findByIdAndUpdate(req.params.body)
        return res.send(usuario)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

router.delete('/deletarUsuario/:_id', async (req, res) => {
    try{
        const usuario = Usuario.findByIdAndDelete(req.params.body)
        return res.send(usuario)
    }catch(err){
        return res.status(400).send({ error: err })
    }
})

module.exports = app => app.use('/usuario', router)