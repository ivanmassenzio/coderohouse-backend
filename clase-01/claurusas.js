let formato = `Hola {{nombre}} espero te encuentres muy bien
Queremos avisarte de nuestras nuevas ofertas de seguro de vida.`;

function contenedor(formato){
    let plantilla = formato
    return function (nombre) {
        result = plantilla.replace('{{nombre}}', nombre)
        console.log(result);
    }
}


const crearBody = contenedor(formato)

crearBody('Maria Jose')