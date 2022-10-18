var numbers = [1, 2, 3, 4, 5]; // [2, 4, 6, 8, 10]
// var names = ["Marie", "Jane", "Peter", "John"]
var doubles = [];

// Programación imperativa
for (var i = 0; i < numbers.length; i++) {
    doubles.push(numbers[i] * 2);
}

var firstClassFunction = function(number) {
    return number * 2;
};

// Programación declarativa - funcion
var doublesF = numbers.map(firstClassFunction)

// console.log(numbers);
// console.log(doubles);
// console.log(doublesF);
// console.log(copyOfNames)


// Ejemplo inmutabilidad

var car = {
    brand: "Nissan",
    model: "Sentra",
    year: 2020
}

//console.log("Objeto car antes de llamar a addColor", car);

// Ejemplo de mutación

function addColor(car) {
    car.color = "Black";
    return car;
}

// var sameCar = addColor(car);

// console.log("Objeto car después de llamar a addColor", car)
// console.log("Objeto sameCar", sameCar)

// console.log("Same car?", car === sameCar);

// Ejemplo inmutabilidad

var x = 0;

function addColorI(car) {
    var newCar = Object.assign({}, car, {
        color: "Black"
    })

    // var newCarAlternative = {
    //     ...car,
    //     color: "Black"
    // }
    return newCar;
}

// console.log("Objeto car antes de llamar a addColorI", car)

// var sameCarI = addColorI(car);

// console.log("Objeto car después de llamar a addColorI", car)
// console.log("Objeto sameCarI", sameCarI)

// console.log("Same car?", car === sameCarI);

// Características de una función PURA


/*
1.- El valor retornado siempre es el mismo cuando se da el mismo valor de entrada.

2.- No debe producir side effects (efectos secundarios).
*/

// Ejemplo de función NO pura:

function randomNumber(value) {
    return Math.floor(Math.random() * 10) * value;
}

// Ejemplo de función pura:
function doubleNumber(value) {
    return value * 2;
}

// console.log("randomNumber: ", randomNumber(2)); // No es pura porque la sálida siempre es diferente
// console.log("doubleNumber: ", doubleNumber(2)); // Es pura porque la sálida siempre es la misma


var cart = [
    {
        item: "Laptop",
        quantity: 1
    }
];

// Ejemplo función no pura
function addItemToCart(item, quantity) {
    cart.push({
        item: item,
        quantity: quantity
    })
}

// Ejemplo función pura
function addItemToCart(cart, item, quantity) {
    var newCart = cart.map(function(element) {
        return element;
    })

    newCart.push({
        item: item,
        quantity: quantity
    })

    return newCart;
}

// Función de primera clase

var square = function(number) {
    return number * number;
}

var squareOfFour = square(4);

//console.log(squareOfFour);

// Función de alto orden

// Input: 12345 -> 1 + 2 + 3 + 4 + 5 = 15

var number = 12345;

var string = number.toString(); // String(number) "12345"

var array = string.split(""); // ["1", "2", "3", "4", "5"]

var arrayOfNumbers = array.map(Number);

var arrayOfNumbers = array.map(function(number) {
    return Number(number)
});

var arrayOfPairs = arrayOfNumbers.filter(function(number, index) {
    return index % 2 === 0;
});

var sum = arrayOfPairs.reduce(function(acumulador, currentValue) {
    return acumulador + currentValue
}, 0);

var sumF = number
    .toString()
    .split("")
    .map(Number)
    .filter(function(number, index) {
        return index % 2 === 0;
    })
    .reduce(function(acumulador, currentValue) {
        return acumulador + currentValue
    }, 0);

// console.log("sum", sum)
// console.log("sumF", sumF)

function flatten(arrays) {
    return arrays.reduce(function(flat, current, index) {
        console.log("index: ", index);
        console.log("flat: ", flat)
        console.log("current: ", current)
        return flat.concat(current);
    }, []);
}
  
  var arrays = [[1, 2, 3], [4, 5], [6]];
  var array = flatten(arrays);
  
  console.log(array); // [1, 2, 3, 4, 5, 6]