class Tables {
  init(connection) {
    this.connection = connection;

    this.createCalls();
  }

  createCalls() {
    const sql = 'CREATE TABLE IF NOT EXISTS Calls( id INT NOT NULL AUTO_INCREMENT, client VARCHAR(50) NOT NULL, pet VARCHAR(20), service_ VARCHAR(20) NOT NULL, scheduled_date DATETIME NOT NULL, creation_date DATETIME NOT NULL, status_ VARCHAR(20) NOT NULL, observations TEXT,PRIMARY KEY(id))';

    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('ok');
      }
    });
  }
 }

module.exports = new Tables;
