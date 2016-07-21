var express= require('express');
var app =express();


var path=require('path');

app.use(express.static('public'));

app.get('/public/index', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var Index=require('./routes/index');

app.use('/',Index);


app.listen(2000, function(){
  console.log("server run on port 2000");
});

//module.exports=app;
