
const request = require('request');

module.exports = (req,res)=>{
    var matches = req.url.match(/api\/start_page\/location\/(spb|msk)/);
    var loc = matches[1];
    request('https://kudago.com/public-api/v1.4/events/?lang=&fields=id,title,age_restriction,images,site_url&page_size=15&location='+loc, { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(body.results));
    return;
    });
}

