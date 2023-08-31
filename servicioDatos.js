let finDeTransmisionDeDatos = function(id){
    console.log('Transferencia',id,'Terminada');
}

let obtenDatosDeinternet=function(id,duracion){
    console.log('Proceso',id,'Obteniendo datos de Internet');
    setTimeout(finDeTransmisionDeDatos,duracion,id);
}

module.exports.getDatos= obtenDatosDeinternet;