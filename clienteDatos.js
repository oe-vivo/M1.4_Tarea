const servicio = require("./servicioDatos");

async function realizarPeticion(id, duracion) {
    await servicio.getDatos(id, duracion);
}

async function main() {
    await realizarPeticion(1, 3000);
    await realizarPeticion(2, 500);
    await realizarPeticion(3, 4000);
    await realizarPeticion(4, 700);
    await realizarPeticion(5, 3500);
    console.log("Todas las peticiones han finalizado.");
}

main();
