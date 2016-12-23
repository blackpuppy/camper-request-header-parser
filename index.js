var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  var ip = req.ip.replace(/^.*:/, ''),
      acceptLanguage = req.get('Accept-Language'),
      language = acceptLanguage.split(',')[0],
      userAgent = req.get('User-Agent'),
      regExp = /\(([^)]+)\)/,
      software = regExp.exec(userAgent)[1],
      doc = {
        ipaddress: ip,
        language: language,
        software: software
      };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(doc));
  res.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
