var time = 28;
var greeting; // Undefined

// // Ejemplo control de flujo IF/ELSE

if (time < 12) {
    greeting = "Buenos días";
} else if (time < 20) {
    greeting = "Buenas tardes";
} else if (time >= 20 && time < 24) {
    greeting = "Buenas noches";
} else {
    greeting = "La hora no existe"
}

console.log(greeting);

// Ejemplo control de flujo Switch

var day = 2;
var text; // undefined

switch (day) {
    case 0:
        text = "Domingo";
        break;
    case 1:
        text = "Lunes";
        break;
    case 2:
        text = "Martes";
        break;
    case 3:
        text = "Miércoles";
        break;
    case 4:
        text = "Jueves";
        break;
    case 5:
        text = "Viernes";
        break;
    case 6:
        text = "Sábado";
        break;
    default:
        text = "El día no existe";
        break;
}

console.log(text);


// Ejemplo - Operador Ternario

var speed = 101;
// //var message = speed > 100 ? "Vas muy rápido" : "Estás debajo del límite";

var message = speed > 120 ? "Vas volando"
    : (
        speed > 100 && speed <= 120 ?
            "Vas muy rápido"
            : "Estás debajo del límite"
    );

// if (speed > 120) {
//     message = "Vas volando";
// } else if (speed > 100 && speed <= 120) {
//     message = "Vas muy rápido";
// } else {
//     message = "Estás debajo del límite";
// }

console.log(message);


Ejemplo - Truthy / Falsy

var message;
var myVar = [];

if (myVar) {
    message = "Truthy";
} else {
    message = "Falsy";
}

console.log(message);


// Ejemplo - Bucles (Ciclos)

for (var index = 0; index < 100; index++) {
    if (index < 50) {
        console.log("Hola mundo", index, "primeros 50");
    } else {
        console.log("Hola mundo", index, "últimos 50");
    }
}

var i = 0;

while (i < 100) {
    if (i === 10) {
        break;
    }
    if (i  < 50) {
        console.log("Hola mundo", i, "primeros 50");
    } else {
        console.log("Hola mundo", i, "últimos 50");
    }
    i++;
}

// Reto 1 - Números pares

for (var index = 0; index <= 100; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}

// Reto 2 - Números primos
for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;

    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(counter);
    }
}