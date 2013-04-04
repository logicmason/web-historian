var cronJob = require('cron').CronJob;
new cronJob('1,6,11,16,21,26,31,36,41,46,51,56 * * * * *', function(){
    console.log('Fetching sites');
    // require("./workers/htmlfetcher.js");
}, null, true);