// tienda de mascotas, vende alimento para perros por kilo, el cliente pone cantidad, marca seleccionada y metodo de envio.
// variables globales
alimentoA = 100
alimentoB = 200
alimentoC = 1000

//operacion multiplicar
function multiplicar(alimento, cantidad){
    const resultado = alimento * cantidad;
    return
}

let cantidad;
let alimento;
let marcaAlimento;
    
while (cantidad != 0){
    const cantidad = parseInt(prompt("Ingresar cantidad de alimentos de comida vendido, recuerde que 0 cero, termina la carga"));
    const marcaAlimento = prompt("Ingrese la marca de alimento que desee: alimentoA - alimentoB - alimentoC");
     
    switch (marcaAlimento){
        case "alimentoA":
           resultado = multiplicar(100, cantidad);
           alert("Debe abonar $ "+ resultado + "por su compra de alimento marca A");
           break;
        case "alimentoB":
            resultado = multiplicar(200, cantidad);
            alert("Debe abonar $ "+ resultado + "por su compra de alimento marca C");
            break;
        case "alimentoC":
            resultado = multiplicar(100, cantidad);
            alert("Debe abonar $ "+ resultado + "por su compra de alimento marca C");
            break;
        default:
            alert("operacion invalida");
            break;
    }

    if (cantidad >= 10 ){
        const valorEnvio = 0
        return valorEnvio;
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else if (cantidad >=5 ){
        const valorEnvio = 100
        return valorEnvio;
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else {
        const valorEnvio = 200
        return valorEnvio;
        alert("su costo de envio es $"+ valorEnvio);
    }
}