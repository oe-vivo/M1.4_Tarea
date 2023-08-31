const servicio = require("./servicioDatos");

function realizarPeticion(id, duracion, callback) {
    servicio.getDatos(id, duracion, () => {
        if (callback) {
            callback();
        }
    });
}

realizarPeticion(1, 3000, () => {
    realizarPeticion(2, 500, () => {
        realizarPeticion(3, 4000, () => {
            realizarPeticion(4, 700, () => {
                realizarPeticion(5, 3500, () => {
                    console.log("Todas las peticiones han finalizado.");
                });
            });
        });
    });
});