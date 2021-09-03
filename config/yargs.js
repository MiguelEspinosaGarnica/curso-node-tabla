const argv = require("yargs")
                .option("b",{
                    alias: "base",
                    type: "number", 
                    demandOption: true,
                    describe: "Es la base de la tabla de multiplicar"
                })
                .check((argv,options) => {
                    if (isNaN(argv.b)){
                        throw "El valor de base debe ser un numero";
                    }
                    return true;
                })
                .option("l",{
                    alias: "listar",
                    type: "boolean",
                    demandOption:  false,
                    default: false,
                    describe: "Muestra la tabla de multiplciar"
                })
                .option("h",{
                    alias: "hasta",
                    type: "number",
                    demandOption: true,
                    default: 10,
                    describe: "Hasta que numero se va a multiplicar la base"
                })
                .argv;

                
module.exports = argv;                