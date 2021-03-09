var http = require('http');
var express = require("express")
var app = express()
var fs = require('fs');
var url = require('url');

const port = 8080


app.get('/about', (req, res) => {
  fs.readFile('about.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
});
app.get('/contact', (req, res) => {
  fs.readFile('contact-me.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
});

app.use('/about', function (req, res, next) {
  res.end(console.log(req.url));
});

app.get('/', (req, res) => {
  fs.readFile('index.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
});

app.use((req, res, next) => {
  res.status(404).send("Unable to find the route you are requesting Lol.")
})
app.listen(port, () => {
  console.log( "App listening on port: ", port)
})
