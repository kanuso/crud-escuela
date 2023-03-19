const express = require('express');
const {sequelize} = require('./src/database/database');


const app = express();
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE,PATCH');
    next();
});

//Seting
app.set('port', process.env.PORT || 3000);


//declacion de los MiddelWare
app.use(express.json());

//rutas
app.use(require('./src/routes/alumnos'));


//corremos el servidor
app.listen(app.get('port'), () => {
    console.log('Server Running on Port: ' + app.get('port'));
}); 