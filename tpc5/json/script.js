var http = require('http')
var mymod = require('./mymod')
var groupArray = require('group-array');
const testFolder = '.';
const fs = require('fs');
var files = [];
var content = [];
//var json = [];


fs.readdirSync(testFolder).forEach(file => {
    if(files.includes(file) == false && file.split('.').pop() =='json' && file!= 'index.json'){
        files.push(file);
    }
})
//console.log(files);

files.forEach(value=>{
    content.push(JSON.parse(fs.readFileSync(value, 'utf8')));
})

var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
var groubedByTip=groupBy(content, 'tipo')
//console.log(groubedByTip);

var json = JSON.stringify(groubedByTip);
fs.writeFile('index.json', json, 'utf8');