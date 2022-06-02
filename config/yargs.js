const yargs = require('yargs');

    const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,      
        type: 'number',
        describe: 'Numero a multiplicar'
    })
    .option('h', {
        alias: 'hasta',  
        type: 'number',
        default: 1,   
        describe: 'Numero max hasta donde multiplicar'
    })
    .option('l', {
        alias: 'listar',  
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla de multiplicar'
    })
    .check((argv, options) => {
        if(isNaN (argv.b)){
            throw 'la base tiene que ser numerica'.red
        }
        return true;
    })
    .argv
;
module.exports = argv;