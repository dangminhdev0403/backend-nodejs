require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 8081;
const path = require('path');
const hostname = process.env.HOST_NAME || 'localhost';
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
// const apiRoute = require('../src/routes/api');

app.use('/v1', webRoute);
// app.use('/api', apiRoute);




// config template engine
configViewEngine(app);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})







