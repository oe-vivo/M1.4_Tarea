let finDeTransmisionDeDatos = function(id, callback) {
    console.log('Transferencia', id, 'Terminada');
    callback();
}

let obtenDatosDeinternet = function(id, duracion, callback) {
    console.log('Proceso', id, 'Obteniendo datos de Internet');
    setTimeout(() => {
        finDeTransmisionDeDatos(id, callback);
    }, duracion);
}

module.exports.getDatos = obtenDatosDeinternet;
