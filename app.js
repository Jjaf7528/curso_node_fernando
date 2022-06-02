const crearMultiplicacion = require('./helpers/multiplicar')
const argv = require('./config/yargs')

crearMultiplicacion(argv.b, argv.h, argv.l)
    .then(res => console.log(res))
    .catch(err => console.log(err))
