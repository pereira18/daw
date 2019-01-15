var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res) {
  axios.get('http://localhost:4020/api/compositores')
    .then(resposta=> res.render('index', { compositores: resposta.data }))
    .catch(erro => {
      console.log('Erro ao carregar dados da BD.')
      res.render('error', {error: erro, message: "Erro ao carregar dados da BD."})
    })
});

router.get('/compositores', function(req, res) {
  axios.get('http://localhost:4020/api/compositores')
    .then(resultado=> res.render('index', { compositores: resultado.data }))
    .catch(erro => {
      console.log('Erro ao carregar dados da BD.')
      res.render('error', {error: erro, message: "Erro ao carregar dados da BD."})
    })
});

router.get('/compositores/:cid', function(req, res) {
  axios.get('http://localhost:4020/api/compositores/' + req.params.cid)
    .then(resultado=> res.render('compositor', { compositor: resultado.data }))
    .catch(erro => {
      console.log('Erro ao carregar compositor.')
      res.render('error', {error: erro, message: "Erro ao carregar compositor da BD."})
    })
});

router.get('/compositores/:p', function(req, res) {
  axios.get('http://localhost:4020/api/compositores/' + req.params.p)
    .then(resultado=> res.render('compositor', { compositor: resultado.data }))
    .catch(erro => {
      console.log('Erro ao carregar compositor.')
      res.render('error', {error: erro, message: "Erro ao carregar compositor da BD."})
    })
});

router.get('/compositores/:cp/:dn', function(req, res) {
  axios.get('http://localhost:4020/api/compositores/' + req.params.cp + '/' + req.params.dn)
    .then(resultado=> res.render('compositor', { compositor: resultado.data }))
    .catch(erro => {
      console.log('Erro ao carregar compositor.')
      res.render('error', {error: erro, message: "Erro ao carregar compositor da BD."})
    })
});

module.exports = router;

