const fs = require('fs');
const concesionariasJson = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));


let marcasController = {
    marcas: function (req, res) {
        res.set({ 'content-type': 'text/plain;charset=utf-8' });
        let marcasFiltradas = [];
        res.write("|-----------------------------------------------------------|" + "\n");
        res.write('                      Lista de Marcas' + "\n");
        res.write("|-----------------------------------------------------------|" + "\n");
        concesionariasJson.forEach(auto => {
            auto.autos.forEach(marca => {
                marcasFiltradas.push(marca.marca);
            })
        });
        marcasFiltradas = marcasFiltradas.filter((p, s) => marcasFiltradas.indexOf(p) === s);
        marcasFiltradas.forEach(marca => {
            res.write("_____________________________\n");
            res.write("|Marca|: " + marca + "\n");
            res.write("_____________________________\n");
        })
        res.end();
    },
    marca: function (req, res) {
        res.set({ 'content-type': 'text/plain;charset=utf-8' });
        let idMarca = req.params.marca;
        let marcasFiltradas = [];
        let validacion = false;
        concesionariasJson.forEach(auto => {
            auto.autos.forEach(marca => {
                if (marca.marca == idMarca) {
                    validacion = true;
                    marcasFiltradas.push(marca);
                }
            })
        })
        if (validacion == false) {
            res.write("|-----------------------------------------------------------|" + "\n");
            res.write('     ERROR 404 No se encontro la marca ' + idMarca + "\n");
            res.write("|-----------------------------------------------------------|" + "\n");
        }
        else {

            res.write("|-----------------------------------------------------------|" + "\n");
            res.write('               Estas en la marca: ' + "|" + idMarca + "|" + "\n");
            res.write("|-----------------------------------------------------------|" + "\n");
            marcasFiltradas.forEach(marca => {
                if (marca.marca == idMarca) {
                    res.write("_____________________________\n");
                    res.write("|Marca|: " + marca.marca + "\n");
                    res.write("|Modelo|: " + marca.modelo + "\n");
                    res.write("|Año|: " + marca.anio + "\n");
                    res.write("_____________________________\n");

                }
            })
        }
        res.end();
    }


};


module.exports = marcasController;