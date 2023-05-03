/*Captcha. Se genera un codigo para demostrar que es humano y no un ordenador. Si el usuario ingresa el codigo correcto se envia el formulario (Se continua en la proxima entrega)*/


function generarCodigo() {

    let j = 0;
    let codigo = "";

    while (j < 5) {
         let x = Math.floor(Math.random() * 10);
         j = j + 1;
         console.log (x)
         codigo+=x
        }

    return codigo
    }

console.log(generarCodigo())