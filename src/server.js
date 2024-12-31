require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8081; 
const path = require('path');
const hostname = process.env.HOST_NAME ||  'localhost';

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// config template engine

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/abc', (req, res) => {
  res.render('sample')
})