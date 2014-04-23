

var TVDB = require("tvdb");
var tvdb = new TVDB({ apiKey: process.env["TVDB_API_KEY"] });
var express = require('express');
var app = express();

app.get('/seriesName/:seriesName',function(req,res){
  console.log(req.params.seriesName);
  tvdb.findTvShow(req.params.seriesName, function(err, tvShows) {
    if (err) return console.error(err);
    res.end(JSON.stringify(tvShows,null,'\t'));
  }); 
});

app.get('/seriesId/:seriesId',function(req,res){
  console.log(req.params.seriesId);
  tvdb.getInfo(req.params.seriesId,function(err,result){
    if (err) return console.error(err);
    res.end(JSON.stringify(result));
  },'en');
});
app.get('/',function(req,res){
  res.send("API:\n (1) /seriesName/{name}\n (2) /seriesId/{id}");
});

app.listen(process.env["PORT"]);
