var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require("path");
http.createServer((req,res)=>{
    var parsed = url.parse(req.url,true)
    var file = path.basename(parsed.pathname)
    var dir =path.dirname(parsed.pathname)
    res.writeHead(200,{'Content-Type':'text/html'})
    
    if (dir == "/"){
        fs.readFile('website/index.html',(erro,dados)=>{
            if(!erro)
                res.write(dados)
            else
                res.write('<p><b>ERRO:</b>'+erro+'</p>')
            res.end()
        })
    }else if(dir == "/html"){
        fs.readFile('website/html/'+file,(erro,dados)=>{
            if(!erro)
                res.write(dados)
            else
                res.write('<p><b>ERRO:</b>'+erro+'</p>')
            res.end()
        })
    }
}).listen(4004,()=>{
    console.log('servidor disponivel na porta 4004....')
})