const app = require('./server-config.js');
const port = process.env.PORT || 8080;
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'computervision'
});

connection.connect();

const server = app.listen(port);


console.log('Server now listening on port ' + port);

module.exports = server;



console.log('Server now listening on port ' + port);

module.exports = server;