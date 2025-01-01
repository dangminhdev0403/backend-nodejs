
const path = require('path');
const express = require('express');
const { log } = require('console');

const configViewEngine = (app) => {

    // console.log(path.join(__dirname, 'views'));
    
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    // config static file
    // log(path.join('./src', 'public'))
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;

