var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')

var myBD = __dirname + '/processos_lvl1.json'

/* GET home page. */
router.get('/', (req,res)=>{
  jsonfile.readFile(myBD, (erro, processos)=>{
    if(!erro) res.render('index', {lista:processos})
    else res.render('error', {e:erro})
  })
})

router.get("/processo1/:c", (req, res) => {
  
  res.send("ID do Processo é " + req.param("c"));
  res.render("classe2" );
});

module.exports = router;
