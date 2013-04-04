
var http = require("http-get");
var fs = require("fs");
var _ = require('underscore');

exports.readUrls = function(urlSource, cb){
  urlSource.on('data', function(data) {
    cb(data.split('\n'));
  });
};

exports.downloadUrls = function(urls){
  _.each(urls, function(url) {
    http.get(url, 'data/sites/'+ url, function (err, res) {
      if (err) {
      } else {
        console.log('File downloaded at: ', res.file);
      }
    });
  });
};