var express = require('express')
var http = require('http')
var pug = require('pug')
var fs = require('fs')
var formidable = require('formidable')
var logger = require('morgan')
var jsonfile = require('jsonfile')

var app = express()
var myBD = "catalogo.json" 
app.use(logger('dev'))
app.use('/uploaded', express.static(__dirname + '/uploaded'))

app.get('/', (req, res) => {
    jsonfile.readFile(myBD, (erro, ficheiros)=>{
        if(!erro){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write(pug.renderFile('form-ficheiro-1.pug',{lista: ficheiros}))
            res.end()
        }else{
            res.write(pug.renderFile('erro.pug', {e: erro}))
            res.end()
        }
        
        })
    })

app.get('/w3.css', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/css'})
    fs.readFile('stylesheets/w3.css', (erro, dados) => {
        if (!erro) res.write(dados)
        else res.write(pug.renderFile('erro.pug', {
            e: erro
        }))
        res.end()
    })
})

app.post('/processaForm', (req, res) => {
    var form = new formidable.IncomingForm()

    form.parse(req, (erro, fields, files) => {
        var fenviado = files.ficheiro.path
        var fnovo = './uploaded/' + files.ficheiro.name

        var informa = {nome: files.ficheiro.name, descricao: fields.desc, data: fields.data}
        fs.rename(fenviado, fnovo, erro => {
            if (!erro) {
                jsonfile.readFile(myBD, (erro, ficheiros)=>{
                    ficheiros.push(informa)
                    jsonfile.writeFile(myBD, ficheiros, erro =>{
                        if(erro) console.log(erro)
                        else console.log('Ficheiro gravado com sucesso.')
                    })
                })
                res.redirect('back')
                res.end()
            } else {
                res.write(pug.renderFile('erro.pug', {e: 'Ocorreram erros ao guardar o ficheiro!'}))
                res.end()
            }
            
        })
    })
})

var myServer = http.createServer(app)

myServer.listen(4005, () => {
    console.log('Servirdor à escuta na porta 4005...')
})