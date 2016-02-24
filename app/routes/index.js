'use strict';

var cors = require('cors');

module.exports = function (app) {

  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });

  app.route('/api/whoami')
    .get(cors(), function(req, res) {
      res.json({
        ipaddress: (req.headers['x-forwarded-for'] || 
                    req.connection.remoteAddress || 
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress ),
        language: req.headers['accept-language'].split(",")[0],
        software: req.headers['user-agent'].split(/[)(]/g)[1]
      })
    });

};
