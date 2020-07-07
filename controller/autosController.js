const fs = require('fs');
const sucursalesController = require('./sucursalesController');

const concesionariasJson = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

let autosController = {
    autos: function (req, res) {
        res.set({ 'content-type': 'text/plain;charset=utf-8' });
        res.write("|-----------------------------------------------------------|" + "\n");
        res.write('                  Lista de Todos los Autos |DH| ' + "\n");
        res.write("|-----------------------------------------------------------|" + "\n");
        concesionariasJson.forEach(concesionaria => {
            concesionaria.autos.forEach(autos => {
                res.write("_____________________________\n");
                res.write("|Marca|: " + autos.marca + "\n");
                res.write("|Modelo|: " + autos.modelo + "\n");
                res.write("|Año|: " + autos.anio + "\n");
                res.write("|Color|: " + autos.color + "\n");
                res.write("_____________________________\n");
            })

        });
        res.end();
    },
    autosMarca: function (req, res) {
        res.set({ 'content-type': 'text/plain;charset=utf-8' });
        let idMarca = req.params.marca;
        let validacion = false;
        let autosFiltrados = [];
        concesionariasJson.forEach(auto => {
            auto.autos.forEach(marca => {
                if (marca.marca == idMarca) {
                    validacion = true;
                    autosFiltrados.push(marca);
                }
            })
        })
        if (validacion == false) {
            res.write("|-----------------------------------------------------------|" + "\n");
            res.write('   ERROR 404 No se encontro ningun auto de la marca ' + idMarca + "\n");
            res.write("|-----------------------------------------------------------|" + "\n");
        }
        else {
            res.write("|-----------------------------------------------------------|" + "\n");
            res.write('               Estas en la marca: ' + "|" + idMarca + "|" + "\n");
            res.write("|-----------------------------------------------------------|" + "\n");
            autosFiltrados.forEach(sucursales => {
                if (sucursales.marca == idMarca) {
                    res.write("_____________________________\n");
                    res.write("|Marca|: " + sucursales.marca + "\n");
                    res.write("|Modelo|: " + sucursales.modelo + "\n");
                    res.write("|Año|: " + sucursales.anio + "\n");
                    res.write("|Color|: " + sucursales.color + "\n");
                    res.write("_____________________________\n");
                }
            })
        }
        res.end();
    },
    autosMarcaDato: function (req, res) {
        res.set({ 'content-type': 'text/plain;charset=utf-8' });
        let idMarca = req.params.marca;
        let idDato = req.params.dato;
        let validacion = false;
        let validacionDos = false;
        let autosFiltrados = [];
        concesionariasJson.forEach(auto => {
            auto.autos.forEach(marca => {
                if (marca.marca == idMarca) {
                    validacion = true;
                    autosFiltrados.push(marca);
                    if (idDato == marca.anio || idDato == marca.color) {
                        validacionDos = true;

                    }
                }

            })
        })
        if (validacion == false) {
            res.write("|-----------------------------------------------------------|" + "\n");
            res.write('   ERROR 404 No se encontro ningun auto de la marca ' + idMarca + "\n");
            res.write("|-----------------------------------------------------------|" + "\n");
        }
        else {
            if (validacionDos == false) {
                res.write("|-----------------------------------------------------------------------------------------------------|" + "\n");
                res.write('      No se encontraron autos de la marca ' + "|" + idMarca + "|" + " que cumplan los pedidos solicitados" + "\n");
                res.write("|-----------------------------------------------------------------------------------------------------|" + "\n");
            }
            else {
                res.write("|-----------------------------------------------------------|" + "\n");
                res.write('               Estas en la marca: ' + "|" + idMarca + "|" + "\n");
                res.write("|-----------------------------------------------------------|" + "\n");
                console.log(autosFiltrados);
                autosFiltrados.forEach(sucursales => {
                    if (sucursales.anio == idDato || sucursales.color == idDato) {
                        res.write("_____________________________\n")
                        res.write("|Marca|: " + sucursales.marca + "\n");
                        res.write("|Modelo|: " + sucursales.modelo + "\n");
                        res.write("|Año|: " + sucursales.anio + "\n");
                        res.write("|Color|: " + sucursales.color + "\n");
                        res.write("_____________________________\n");
                    }
                })
            }
        }
        res.end();

    }
};


module.exports = autosController;