const request = require('request');

module.exports = (req,res)=>{
    var matches = req.url.match(/get\/event\/([0-9]*)/);
    var id = matches[1];
    request('https://kudago.com/public-api/v1.4/events/'+id+'/?lang=ru&fields=title,dates,description,body_text,age_restriction,images,price,place,publication_date&expand=place,dates', { json: true }, (err, responde, body) => {
        if (err) { return console.log(err); }
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(body));
        return;
        });
}