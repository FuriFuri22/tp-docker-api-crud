const express = require('express');
const sql = require('mysql');
const db = require('./db')
const app = express();


db()

const query = 'USE api_database';
db.query(query, (err) => {
  if (err) {
    console.error('Error al seleccionar la base de datos:', err);
  } else {
    console.log('Base de datos seleccionada correctamente');
        const createTableQuery = 'CREATE TABLE productos (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(50), precio DECIMAL(10, 2))';
        db.query(createTableQuery, (err) => {
          if (err) {
            console.error('Error al crear la tabla:', err);
          } else {
            console.log('Tabla "productos" creada correctamente');
          }
    });

  }
});

app.get('/productos', (req, res)=>{
    const query = 'SELECT * FROM productos'
    db().query(query,(err, rows) => {
        if(!err){
          console.log("Datos obtenidos");
            
          return res.json({
            status: 201,
            message:'Productos cargados correctamente.',
            data :rows
            })
        }else{
         throw err;
        }
      });
})

app.post('/productos', (req, res)=>{
    const {producto} = req.body;
    //console.log(producto);

    const insertQuery = `INSERT INTO productos SET (${producto.name}, ${producto.precio});`;

})

app.listen(5000, ()=>console.log("Servidor corriendo"));
