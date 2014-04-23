

var TVDB = require("tvdb");
var tvdb = new TVDB({ apiKey: process.env["TVDB_API_KEY"] });
var express = require('express');
var app = express();

app.get('/seriesName/:seriesName',function(req,res){
  console.log(req.params.seriesName);
  tvdb.findTvShow(req.params.seriesName, function(err, tvShows) {
    if (err) return;
    console.log(tvShows);
    res.end(JSON.stringify(tvShows,null,'\t'));
  }); 
});

app.get('/seriesId/:seriesId',function(req,res){
  console.log(req.params.seriesId);
  tvdb.getInfo(req.params.seriesId,function(err,result){
    console.log(JSON.stringify(result,null,'\t'));
    res.end(JSON.stringify(result));
  },'en');
});

app.listen(process.env["PORT"]);
