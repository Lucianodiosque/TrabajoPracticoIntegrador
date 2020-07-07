const express = require('express');
const routeAutos = require('./routes/autos.js');
const routeHome = require('./routes/home');
const routeMarcas = require('./routes/marcas.js');
const routeSucursales = require('./routes/sucursales');


const app = express();


app.listen(3030,() =>console.log("Servidor corriendo :)"));

app.use('/autos', routeAutos); 
app.use('/', routeHome);
app.use('/sucursales', routeSucursales);
app.use('/marcas', routeMarcas);