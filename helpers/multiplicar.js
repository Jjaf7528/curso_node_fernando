const fs = require('fs')
const colors = require('colors');


const crearMultiplicacion = async (numero, hasta = 1, listar = false)=>{
    
    try {

        let salida = '';

        for(let i=1;i<=hasta;i++){
            salida += `${numero * i}\n`
        }   

        if(listar){
            console.log(salida.blue);
        }

        fs.writeFileSync('./salidas/message.txt', salida)  
        return `tabla del ${numero} creada.`.green

    } catch (error) {
        throw error;
    }   
}

module.exports = crearMultiplicacion;