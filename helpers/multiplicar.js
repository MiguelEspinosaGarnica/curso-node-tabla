const fs = require("fs");
const colors = require('colors');
colors.enable();

const crearArchivo = async(base = 5,l,multiplicador) => {

    try{
        console.log("=================================".magenta);
    console.log(`          Tabla del ${colors.red(base)}       `.blue);
    console.log("=================================".magenta);

    let salida = " ";
    
    for ( i = 0; i <= multiplicador; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }
    if(l == true){
        console.log(salida.red);
    }
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `Tabla del ${base}`;
    }
    catch{
        throw(err);
    }

    
}

module.exports = {
    crearArchivo
}