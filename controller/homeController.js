const fs = require('fs');

const concesionariasJson = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

let homeController = {
    bienvenida: function (req, res) {
        res.set({ 'content-type': 'text/plain;charset=utf-8' });
        res.write("-----------------------------------------------------------")
        res.write("\n");
        res.write("             Bienvenido a CONSECIONARIA DH \n");
        res.write("-----------------------------------------------------------")
        res.write("\n");
        concesionariasJson.forEach(sucursales => {
            res.write("_______________________________" + "\n");
            res.write("        " + sucursales.sucursal + "\n");
            res.write("_______________________________" + "\n");

        });
        res.end();

    }
};


module.exports = homeController;