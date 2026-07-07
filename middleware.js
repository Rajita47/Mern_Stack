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

app.get('/users', (req, res)=> {
    res.send('Users Page');
});
app.get('/users/:id', (req, res)=> {
    res.send('User with id: ' + req.params.id);
});
app.post('/users', (req, res)=> {
    res.send('User  is here ');
});

app.post('/users/:id', (req, res)=> {
    res.send('User with id: ' + req.params.id);
});
app.put('/users/:id', (req, res)=> {
    res.send('User with id: ' + req.params.id);
});
app.delete('/users/:id', (req, res)=> {
    res.send('User with id: ' + req.params.id);
});

app.listen(3001);