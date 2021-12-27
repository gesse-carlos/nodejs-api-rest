const customExpress = require('./config/customExpress');
const connection = require('./utils/connection');
const Tables = require('./utils/tables');

connection.connect((error) => {
  try {
    console.log('connected successfully');

    Tables.init(connection);
    const app = customExpress();

    app.listen(3000, () => console.log('server running on 3000 port'));
  } catch (e) {
    console.log(e + "\n" + error)
  }
});
