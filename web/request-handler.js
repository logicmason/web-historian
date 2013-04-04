var fs = require("fs");
var headers = {};

exports.handleRequest = function (req, res, outputOverride) {

  console.log("Serving request type " + req.method + " for url " + req.url);
  var statusCode = 0;

  var index = function(req, res){
    headers['Content-Type'] = 'text/html';
    res.writeHead(200, headers);
    res.end('Hi!  I\'m an index page!  And I have an <input name="blah"/>input tag!');
  }
  if (req.url === "/") {
    index(req, res);
  } else {
    console.log(req.url);
    headers['Content-Type'] = 'text/html';
    res.writeHead(200, headers);
    var filename = (__dirname + "/data/sites" + req.url).replace(/\/web/, "");
    console.log("The filename is: "+filename);
    fs.readFile(filename, "binary", function(err, file){
      if(err){
        console.log(err);
        return;
      }
      var fileStream = fs.createReadStream(filename);
      console.log(fileStream);
      fileStream.pipe(res);
      return;
    })
  }
};
