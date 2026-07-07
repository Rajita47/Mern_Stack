const express = require('express');
const app = express();

//logger middleware
const myLogger = function (req, res, next){
    console.log('Logged');
    next();
};

//Tells our app to usr our middleware
app.use(myLogger)
app.get('/', (req, res)=> {
    res.send('Hello World!');
});

app.listen(3001);