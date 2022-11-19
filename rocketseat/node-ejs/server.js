const express = require('express');
const { get } = require('express/lib/response');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    const items = [
    {
        tittle: 'D',
        message: 'Desenvolver aplicações e serviços',
    },
    {
        tittle: 'E',
        message: 'EJS usa javascript para rederizar HTML',
    },
    {
        tittle: 'M',
        message: 'Mensagem aplicações e serviços',
    },
    {
        tittle: 'A',
        message: 'Ajuda e aplicações e serviços',
    }
    ]
    res.render('pages/index',{
        qualidades: items,
    });

});

app.get('/about', function(req, res){
    res.render('pages/about');
});

app.listen(8080)
console.log('rodando')