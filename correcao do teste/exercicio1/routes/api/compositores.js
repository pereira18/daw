var express = require('express')
var router = express.Router()
var Compositor = require('../../controllers/api/compositor')

// API para os compositores
router.get('/', (req,res)=>{
    Compositor.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de compositores.'))
})

router.get('/:cid', (req,res)=>{
    Compositor.consultar(req.params.cid)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na consulta de compositor.'))
})

router.get('/periodo/:p', (req,res)=>{
    Compositor.listarPeriodo(req.params.p)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de compositores por tipo.'))
})

router.get('/compositores/:cp/:dn', (req,res)=>{
    Compositor.listarPeriodoSup(req.params.cp,req.params.dn)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de compositores por data.'))
})

module.exports = router