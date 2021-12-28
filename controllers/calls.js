const Call = require('../models/calls');

module.exports = (app) => {
  app.get('/calls', (req, res) => Call.read(res));

  app.get('/calls/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Call.queryById(id, res);
  })

  app.post('/calls', (req, res) => {
    const call = req.body;

    Call.create(call, res);
  });

  app.patch('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;

    Call.update(id, values, res);
  });

  app.delete('/atendientos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Call.delete(id, res);
  });
};
