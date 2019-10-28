const express = require('express');
var cors = require('cors');
const app = express();



const makeCrud = require('express-json-file-crud').makeCrud;
const productCrud = makeCrud('products', './storage');
const userCrud = makeCrud('users', './storage');

app.use(cors());

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use('/products', productCrud);
app.use('/users', userCrud);

app.listen(3000, () => console.log('listening on port 3000!'));