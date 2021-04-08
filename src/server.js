const express = require('express');
const http = require('http')
const cors = require('cors');
const app = express();

app.use(cors);

app.get("/status", function(req, res)
{
    res.send("Requested entry");
});

http.createServer(app).listen(8080);