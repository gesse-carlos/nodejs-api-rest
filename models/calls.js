const connection = require('../utils/connection');

class Call {
  create(call) {
    const sql = 'INSERT INTO Calls SET ?';

    connection.query(sql, call, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    })
  }
}

module.exports = new Call;