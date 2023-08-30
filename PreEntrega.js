// tienda de mascotas, vende alimento para perros por kilo, el cliente pone cantidad, marca seleccionada y metodo de envio.
// variables globales
const alimentoA = 100
const alimentoB = 200
const alimentoC = 1000

let cantidad; 

//operacion multiplicar
function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}

while (cantidad != 0){
    cantidad = parseInt(prompt("Ingresar cantidad de alimentos de comida vendido, recuerde que 0 cero, termina la carga"));
    marcaAlimento = prompt("Ingrese la marca de alimento que desee:\n\ -Si quiere alimento marca A ingrese = A \n\ -Si quiere alimento marca B ingrese = B \n\ -Si quiere alimento marca C ingrese = C");
     
    switch (marcaAlimento){
        case "A":
           resultado = multiplicar(alimentoA, cantidad);
           alert("Debe abonar $ "+ resultado + " por su compra de alimento marca A");
           break;
        case "B":
            resultado = multiplicar(alimentoB, cantidad);
            alert("Debe abonar $ "+ resultado + " por su compra de alimento marca B");
            break;
        case "C":
            resultado = multiplicar(alimentoC, cantidad);
            alert("Debe abonar $ "+ resultado+ " por su compra de alimento marca C");
            break;
        default:
            alert("operacion invalida");
            break;
    }

    if (cantidad >= 10 ){
        valorEnvio = 0
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else if (cantidad >=5 ){
        valorEnvio = 100
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else {
        valorEnvio = 200
        alert("su costo de envio es $"+ valorEnvio);
    }
}