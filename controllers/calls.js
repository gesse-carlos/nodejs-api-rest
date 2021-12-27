const Call = require('../models/calls');

module.exports = (app) => {
  app.get('/calls',
  (req, res) => res.send('You\'re in calls route and running a GET method!'));

  app.post('/calls', (req, res) => {
    const call = req.body;

    Call.create(call);
    res.send('You\'re in calls route and running a POST method')
  });
};
