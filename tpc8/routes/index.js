var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var pug = require('pug')
var fs = require('fs')
var formidable = require('formidable')
var myBD = __dirname + '/catalogo.json'


/* GET home page. */
router.get('/', (req, res, next) => res.render('index'))

router.get('/ficheiros', (req, res) => {
  jsonfile.readFile(myBD, (erro, ficheiros)=>{
      if(!erro){
          res.render('ficheiro',{lista: ficheiros})
      }else{
          res.render('error', {e: erro})
      }
      })
  })

  router.post('/processaForm', (req, res) => {
    var form = new formidable.IncomingForm()
    
    form.parse(req, (erro, fields, files) => {
        console.log(fields)
        var fenviado = files.ficheiro.path
        var fnovo = './public/images/' + files.ficheiro.name
        console.log('data' + fields.data)
        var informa = {nome: files.ficheiro.name, descricao: fields.desc, data: fields.data}
            fs.rename(fenviado, fnovo, erro => {
            if (!erro) {
                jsonfile.readFile(myBD, (erro, ficheiros)=>{
                    
                    ficheiros.push(informa)
                    jsonfile.writeFile(myBD, ficheiros, erro =>{
                        if(erro) console.log(erro)
                        else console.log('Ficheiro gravado com sucesso.')
                        res.json(informa)
                    })
                })
            } else {
                res.render('erro', {e: 'Ocorreram erros ao guardar o ficheiro!'})
            }    
        })
    })
})
module.exports = router;
