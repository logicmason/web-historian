// set up a launchd plist in ~/Library/LaunchDaemons to run this file
var helpers = require("/Users/Catalyst/code/archive.org/workers/lib/html-fetcher-helpers.js");
var fs = require("fs");
process.cwd();
var filename = "/Users/Catalyst/code/archive.org/data/sites.txt";
fs.readFile(filename, "utf8", function(err, file){
  if(err){
    console.log(err);
    return;
  }
  var fileStream = fs.createReadStream(filename);
  fileStream.setEncoding('utf8');
  helpers.readUrls(fileStream, helpers.downloadUrls);
  return;
});