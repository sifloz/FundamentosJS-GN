var color4 = "Magent"

var colors = [
    "Red",
    "Green",
    "Blue",
    color4
]

console.log("colors: ", colors)

// Acceder al valor y manipular/actualizar
colors[0] = "Yellow";

// Acceder al valor
console.log("colors[0]: ", colors[0])
console.log("colors[1]: ", colors[1])
console.log("colors[2]: ", colors[2])
console.log("colors[3]: ", colors[3])

// Index no existente, valor indefinido:
console.log("colors[4]: ", colors[4])

console.log(colors.length);
console.log("Hola mundo".length);

// Ejemplo - multiplicación de valores de un arreglo

var myArray = [1, 3, 4, 7, 2, 1, 8, 9];

function multiplyByTwo(numbersArray) {
    var multipledNumbers = [];

    for(var i = 0; i < numbersArray.length; i++) {
        var result = numbersArray[i] * 2;
        multipledNumbers.push(result);
    }

    return multipledNumbers;
}

console.log(myArray);
console.log(multiplyByTwo(myArray));


var ages = [23, 45, 31, 16, 29];

console.log("Arreglo: ", ages);

// Función común

function calculateAverage(agesArray) {
    var sum = 0;

    for (var i = 0; i < agesArray.length; i++) {
        console.log("Sum: ", sum);
        sum = sum + agesArray[i];
    }
    
    console.log("Sum: ", sum);
    var average = sum / agesArray.length;
    return average;
}

// Expresión de función (anónima)

var calculateAverageAnon = function(agesArray) {
    var sum = 0;

    for (var i = 0; i < agesArray.length; i++) {
        console.log("Sum: ", sum);
        sum = sum + agesArray[i];
    }
    
    console.log("Sum: ", sum);
    var average = sum / agesArray.length;
    return average;
}

console.log("Promedio: ", calculateAverage(ages));
console.log("Promedio: ", calculateAverageAnon(ages));

// Objetos

var john = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1990,
    favoriteColors: [
        "Red",
        "Green",
        "Blue"
    ]
};

console.log("john: ", john);
console.log("lastName: ", john.lastName);
console.log("lastName: ", john["lastName"]);

// Ejemplo - convertir objeto en arreglo

var car = {
    "brand": "Nissan",
    model: "Versa",
    year: 2020
};

console.log(Object.keys(car))

//[['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]  // Resultado esperado

function keyValuesPairs(obj) {
    var keys = Object.keys(obj);
    var pairs = [];

    console.log("keys: ", keys);
    console.log("pairs: ", pairs);
    
    for(var i = 0; i < keys.length; i++) {
        pairs.push([keys[i], obj[keys[i]]]);
        console.log("pairs: ", pairs);
    }

    return pairs;
}

console.log(keyValuesPairs(car));

// Funciones y objetos

// Ejemplo de función dentro de propiedad de objeto
var johnObject = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1990,
    favoriteColors: [
        "Red",
        "Green",
        "Blue"
    ],
    calculateAge: function() {
        var today = new Date();
        var year = today.getFullYear();

        return year - this.birthYear;
    },
};

// Ejemplo de función dentro de arreglo
var functionArray = ["John", function() {
    console.log("Hola mundo")
}]

console.log(johnObject.calculateAge());
functionArray[0]();

var people = [
    johnObject,
    {
        firstName: "Maria",
        lastName: "Doe",
    }
];

console.log("people", people)