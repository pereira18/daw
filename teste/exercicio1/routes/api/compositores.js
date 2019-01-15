var express = require('express')
var router = express.Router()
var Evento = require('../../controllers/api/compositor')

// API para os compositores
router.get('/', (req,res)=>{
    Evento.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de eventos.'))
})

router.get('/:cid', (req,res)=>{
    Evento.consultar(req.params.cid)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na consulta de evento.'))
})

router.get('/periodo/:p', (req,res)=>{
    Evento.listarPeriodo(req.params.p)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de eventos por tipo.'))
})

router.get('/compositores/:cp/:dn', (req,res)=>{
    Evento.listarPeriodoSup(req.params.cp,req.params.dn)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de eventos por data.'))
})

module.exports = router