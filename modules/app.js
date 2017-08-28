'use strict';
var http = require('http');
var url=require('url');
var path=require('path');
var express = require('express');
var app=express();
var bodyParser= require('body-parser');
var PORT = process.env.PORT||3344;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

function error(codigo){
    switch (codigo) {
        case 500:
            return 'Se produjo un error500';
            break;
        case 400:
            return 'Se produjo un error400';
            break;
    }
}

app.get('/',function(request,response){
    if (request.statusCode==200) {
        response.send('estas en la pagina principal')
    } else {
        response.send(error(request.statusCode));
    }
})

app.get('/pacientes',function (request,response) {
    if (request.statusCode==200) {
        response.send('estas en la pagina pacientes');
    } else {
        response.send(error(request.statusCode));
    }
})

app.get('/pacientes/:id',function (request,response) {
    if (request.statusCode==200) {
        response.send('el id del Paciente ingresado no existe');
    } else {
        response.send('')
    }
})
app.listen(88990,function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(`La aplicaciòn esta corriendo sobre el puerto ${PORT}`);
    }
})