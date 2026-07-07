const express = require('express');
const app = express();
app.use(express.json());
//Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use('/users', require('./routes/users'));
//404 catch-all
app.use ((req, res) => res.status(404).json({ error: 'Not Found' }));
app.use ((err, req, res, next) => res.status(500).json({ error: err.message }));
app.listen(3000);