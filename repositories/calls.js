const query = require('../utils/database/queries');

class Call {
  create(call) {
    const sql = 'INSERT INTO Calls SET ?';
    return query(sql, call);
  };

  read() {
    const sql = 'SELECT * FROM Calls';
    return query(sql);
  };
}

module.exports = new Call();