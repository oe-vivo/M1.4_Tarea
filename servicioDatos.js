let finDeTransmisionDeDatos = function(id) {
    return new Promise(resolve => {
        console.log('Transferencia', id, 'Terminada');
        resolve();
    });
}

let obtenDatosDeinternet = function(id, duracion) {
    return new Promise(resolve => {
        console.log('Proceso', id, 'Obteniendo datos de Internet');
        setTimeout(() => {
            finDeTransmisionDeDatos(id).then(resolve);
        }, duracion);
    });
}

module.exports.getDatos = obtenDatosDeinternet;
