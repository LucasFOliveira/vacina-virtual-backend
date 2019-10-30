var express = require('express');
let mongoose = require('mongoose');
const app = express();
let bodyParser = require('body-parser');
const api = require('./api')



const PORT = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(api);


mongoose.connect('mongodb://localhost/vacina-virtual', { useNewUrlParser: true});

const nodeEnv = process.env.NODE_ENV || 'development'; 

if (nodeEnv === 'production') {
    corsOptions = {
      'origin': 'http://localhost:4000',
      'optionsSuccessStatus': 200
    };
    console.log('The system is running in production');
  } else {
    console.log('The system is not running in production');
}


app.get('/',function(req,res){
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify('Welcome to Vacina Virtual'))
});



app.listen(PORT,function(){
    console.log(`Listening on port ${PORT}`)
});


module.exports=app