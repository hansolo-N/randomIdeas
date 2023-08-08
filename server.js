const express = require('express');
const { listen } = require('express/lib/application');

const port = 5000;

const app = express();

app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})

