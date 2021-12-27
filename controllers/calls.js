module.exports = (app) => {
  app.get('/calls',
  (req, res) => res.send('You\'re in calls route and running a GET method!'));

  app.post('/calls', (req, res) => {
    console.log(req.body);
    res.send('You\'re in calls route and running a POST method')
  });
};
