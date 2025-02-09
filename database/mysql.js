import mysql from 'mysql';
import { mysqlConfig } from '../config/dbConfig.js';

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

export default connection;
