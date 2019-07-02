const request = require('request');

module.exports = (req,res)=>{
       var matcher = req.url.match(/fill-event\/location\/(spb|msk)\/category\/(exhibition|concert|theater|festival|education|shopping|games)/);
       var location = matcher[1]; 
       var category = matcher[2];
       request('https://kudago.com/public-api/v1.4/events/?lang=&fields=id,title,age_restriction,images,dates,description,place&expand=place,dates&page_size=105&location='+location+'&categories='+category, { json: true }, (err, responde, body) => {
            if (err) { return console.log(err); }
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(body.results));
            return;
            });
}