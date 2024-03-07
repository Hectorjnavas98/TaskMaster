const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

app.use('/recurces', express.static('public'));
app.use('/recurces', express.static(__dirname + '/public'));


app.get('/', (req, res)=>{
    res.send('Hola');
})

app.listen(3000 , (req, res)=>{
    console.log('ok en http://localhost:3000');
})