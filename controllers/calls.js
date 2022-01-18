const Call = require('../models/calls');

module.exports = (app) => {
  app.get('/calls', (req, res) => {
    Call.read()
    .then((result) => res.json(result))
    .catch((error) => res.status(400).json(error));
  });

  app.get('/calls/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Call.queryById(id, res);
  });

  app.post('/calls', (req, res) => {
    const call = req.body;

    // Call.create(call, res);
    Call.create(call)
    .then((newCall) => res.status(201).json(newCall))
    .catch((error) => res.status(400).json(error));
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
