const express = require('express');
const cors = require('cors');
const moment = require('moment');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));
app.use(
    cors({
        origin : '*',
        methods : ['GET', 'POST', 'PUT', 'DELETE'],
        allowHeaders : ['Content-Type']
    })
);

app.listen(port);

app.post('/data', (req, res)=>{
    res.send([100]);
})