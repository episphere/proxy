const http = require("http");
const axios = require('axios');

//create a server object:
http
  .createServer(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    //url = 'https://data.cdc.gov/resource/muzy-jte6.json?$limit=3'
    url = req.url.slice(2)
    console.log(`server ready ${Date()}`)
    if(req.url!='/favicon.ico'){
      axios.get(url).then(x => {
        console.log(`data retrieved from ${url}`)
        //res.end(`:-)`)
        res.end(JSON.stringify(x.data))
      })
    }else{
      res.end()
    }
      
  }).listen(3000); //the server object listens on port 8080