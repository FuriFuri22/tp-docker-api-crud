const mysql = require('mysql');

const db = ()=>{
  const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'mypassword',
      database: 'api_database'
    });
    
    connection.connect((err) => {
      if (err) {
        console.error('Error al conectar a la base de datos:', err);
      } else {
        console.log('Conexión exitosa a la base de datos');
      }
    })

}






  module.exports = db;