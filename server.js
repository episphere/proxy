const http = require("http");
const axios = require('axios');

//create a server object:
http
  .createServer(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    url = 'https://data.cdc.gov/resource/muzy-jte6.json?$limit=3'
    axios.get(url).then(x => {
      res.end('hello proxy')
    })
  }).listen(3000); //the server object listens on port 8080
/*
                
    //debugger
    //res.write(`Hello World from Jonas! at ${Date()}`); //write a response to the client
    axios.get(url).then(x => {
      //console.log(`---${Date()}---\n`,x.data)
      //console.log(req)
      //res.end(JSON.stringify(x.data))
      //res.end('hello')
      //console.log(req)
      res.end(`Hello proxy at ${Date()}`)
    })
    //res.end(); //end the response
  })
  .listen(3000); //the server object listens on port 8080
*/