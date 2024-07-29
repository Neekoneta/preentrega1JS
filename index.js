alert("Calculadora de USD a pesos Argentinos en Steam");
let juego = prompt("Ingresa el nombre del juego:");
console.log(juego);
let precioDolares = prompt("Ingresa el precio del juego en dólares:");
console.log(precioDolares);
precioDolares = parseFloat(precioDolares);

if (isNaN(precioDolares)) {
  alert("Por favor, ingresa un precio válido.");
} else if(precioDolares === 0){
        alert("0 no es un precio a convertir en dolar");
} else{
        let precioEnDolares = precioDolares * 1450;
        alert("El precio del " + juego +" en Dolares es: " + precioEnDolares );
}
alert("Gracias por usar nuestra calculadora");
