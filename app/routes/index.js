'use strict';

module.exports = function (app) {

  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });

  app.route('/api/whoami')
    .get(function(req, res) {
      console.log(req.headers)
      res.json(req.headers)
    });

};
