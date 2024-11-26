const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Welcome to my ecommerce app!')
});

app.listen(port, ()={
    console.log(`Listening on port ${port}`)
});

