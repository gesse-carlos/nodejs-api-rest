const connection = require('./connection');

module.exports = (query, params = '') => {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (errors, content, fields) => {
      if (errors) {
        return reject(errors);
      }
      return resolve(content);
    });
  });
}
