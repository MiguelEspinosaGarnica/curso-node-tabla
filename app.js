console.clear();

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require("./config/yargs");
const colors = require('colors');
colors.enable();




console.log(argv);
console.log("Base yargs:",argv.base);

const base = argv.base;
const l = argv.listar;
const mul = argv.hasta;

crearArchivo(base,l,mul)
    .then(nombreArchivo => console.log(nombreArchivo.green, "creada".green))
    .catch(err => console.log(err)); 
