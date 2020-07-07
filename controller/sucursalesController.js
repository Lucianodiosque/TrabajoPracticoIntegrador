const fs = require('fs');

const concesionariasJson = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

let sucursalesController = {
    listar: function (req, res) {
        res.set({ 'content-type': 'text/plain;charset=utf-8' });
        res.write("|-----------------------------------------------------------|" + "\n");
        res.write('                      Lista de sucursales' + "\n");
        res.write("|-----------------------------------------------------------|" + "\n");
        concesionariasJson.forEach(sucursales => {
            res.write("_______________________________________________________________________________________________" + "\n");
            res.write("Sucursal: " + sucursales.sucursal + "\n");
            res.write("-----------------------------------------------------------------------------------------------" + "\n");
            res.write("Direccion: " + sucursales.direccion + "\n");
            res.write("-----------------------------------------------------------------------------------------------" + "\n");
            res.write("Telefono: " + sucursales.telefono + "\n");
            res.write("_______________________________________________________________________________________________" + "\n");

        });
        res.end();
    },
    infosucursal: function (req, res) {
        res.set({ 'content-type': 'text/plain;charset=utf-8' });
        let idSucursal = req.params.sucursal;
        let validacion = false;
        concesionariasJson.forEach(sucursales => {
            if (sucursales.sucursal == idSucursal) {
                validacion = true;
            }
        })
        if (validacion == false) {
            res.write("|-----------------------------------------------------------|" + "\n");
            res.write('     ERROR 404 No se encontro la sucursal ' + idSucursal + "\n");
            res.write("|-----------------------------------------------------------|" + "\n");
        }
        else {
            concesionariasJson.forEach(sucursales => {
                if (sucursales.sucursal == idSucursal) {
                    res.write("|-----------------------------------------------------------|" + "\n");
                    res.write('                      Sucursal: ' + idSucursal + "\n");
                    res.write("|-----------------------------------------------------------|" + "\n");
                    res.write("__________________________________________________________________________________________________________" + "\n");
                    res.write("|Sucursal|: " + sucursales.sucursal + "\n");
                    res.write("----------------------------------------------------------------------------------------------------------" + "\n");
                    res.write("|Direccion|: " + sucursales.direccion + "\n");
                    res.write("----------------------------------------------------------------------------------------------------------" + "\n");
                    res.write("|Telefono|: " + sucursales.telefono + "\n");
                    res.write("----------------------------------------------------------------------------------------------------------" + "\n");
                    res.write("|Cantidad de autos disponibles|: " + sucursales.autos.length + "\n");
                    res.write("__________________________________________________________________________________________________________" + "\n");
                    sucursales.autos.forEach(autos => {
                        res.write("_____________________________\n");
                        res.write("|Marca|: " + autos.marca + "\n");
                        res.write("|Modelo|: " + autos.modelo + "\n");
                        res.write("|Año|: " + autos.anio + "\n");
                        res.write("|Color|: " + autos.color + "\n");
                        res.write("_____________________________\n");
                    })
                }

            })
        }
        res.end();
    }

};


module.exports = sucursalesController;



