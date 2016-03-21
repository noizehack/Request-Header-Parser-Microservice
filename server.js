var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url === '/api/whoami' || req.url === '/api/whoami/') {
    var language = req.headers['accept-language'];
    language = language.slice(0, language.indexOf(','));
    var software = req.headers['user-agent'];
    software = software.slice(software.indexOf('(') + 1, software.indexOf(')') - 1);
    var json = {
      ipaddress: req.headers['x-forwarded-for'],
      language: language,
      software: software
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(json));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var url = 'https://' + req.headers.host + '/api/whoami/';
    res.end('<!doctype html><html lang="en"><body><h1>go to <a href="' + url + '">' + url + '</a> for JSON response</h1></body></html>');
  }
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('server listening on port:' + port);