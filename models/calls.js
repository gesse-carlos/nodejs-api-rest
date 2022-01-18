const moment = require('moment');
const connection = require('../utils/connection');
const axios = require('axios');
const repository = require('../repositories/call')

class Call {
  create(call, res) {
    const creation_date = moment(call.creation_date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
    const scheduled_date = moment(call.scheduled_date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

    const validateData = moment(scheduled_date).isSameOrAfter(creation_date);
    const validateClient = call.client.length >= 2;

    const validations = [
      {
        name: 'date',
        valid: validateData,
        message: 'The input date must be same or after the creation date',
      },
      {
        name: 'client',
        valid: validateClient,
        message: 'Client name must be at least 2 characters',
      },
    ];

    const errors = validations.filter((validation) => !validation.valid);

    try {
      const callDate = {...call, scheduled_date, creation_date};

      const sql = 'INSERT INTO Calls SET ?';

      connection.query(sql, callDate, (error, result) => {
        if (error) {
          return res.status(400).json(error);
        }
        res.status(201).json(call);
      });
    } catch (error) {
      console.log(error);
      res.status(400).json(errors);
    }
  };

  read(res) {
    return repository.read();
  };

  queryById(id, res) {
    const sql = `SELECT * FROM Calls WHERE id=${id}`;

    connection.query(sql, (error, results) => {
      const result = results[0];
      if (error) {
        return res.status(400).json(error);
      }
      res.status(200).json(result);
    });
  };

  update(id, values, res) {
    if (values.date) {
      values.date = moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
    }

    const sql = 'UPDATE Calls SET ? WHERE id=?';

    connection.query(sql, [values, id], (error, result) => {
      if (error) {
        res.status(400).json(error);
      }
      res.status(200).json({...values, id});
    });
  };

  delete(id, res) {
    const sql = 'DELETE FROM Calls WHERE id=?';

    connection.query(sql, id, (error, result) => {
      if (error) {
        return res.status(400).json(error);
      }
      res.status(200).json({ id });
    });
  };
}

module.exports = new Call;