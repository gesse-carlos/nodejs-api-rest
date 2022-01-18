const express = require('express');

const app = new express();
const faker = require('faker');

app.get('/:cpf', (req, res) => {
  const { cpf } = req.params

  res.status(200).json({
      cpf,
      name: faker.name.findName(),
      birthDate: faker.date.past()
  })
});

app.listen(8082, () => console.log('Ok'));
