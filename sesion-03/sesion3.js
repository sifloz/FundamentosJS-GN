function calculateAge(birthYear) {
    var age = 2022 - birthYear;
    return age;
}

var ageHector = calculateAge(1996);
console.log(ageHector);

function yearsUntilRetirement(year, name) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(name + " retires in " + retirement + " years.");
    console.log(`${name} retires in ${retirement} years.`);
}

yearsUntilRetirement(1996, "Héctor");

function power(base, exponent) {
    var result = 1;

    for(var i = 0; i < exponent; i++) {
        result *= base; // Same as: result = result * base;
    }

    return result;
}

console.log("3 ^ 3 = ", power(3, 3));
console.log("3 ^ 4 = ", power(3, 4));
console.log("3 ^ 5 = ", power(3, 5));
console.log("2 ^ 2 = ", power(2, 2));
console.log("2 ^ 3 = ", power(2, 3));

var square = function(num) {
    return num * num;
}

var factorial = function fac(number) {
    return number < 2 ? 1 : number * fac(number - 1);
}

console.log(factorial(5));

// Ejemplo de una función común

function myCommonFunction() {
    return "Hola mundo";
}

// Ejemplo de una expresión de función

var myFunctionExpression = function() {
    return "Hola mundo";
}

function whatYouDo(myFunc) {
    console.log(myFunc())
}

whatYouDo(myFunctionExpression);

var myProfile = function(job, name) {
    switch(job) {
        case "developer":
            return `${name} develop cool apps.`
            break;
        case "designer":
            return `${name} desgins awesome websites.`
            break;
        default:
            return `${name} does something else.`
            break;
    }
};

function myProfileCommon(job, name) {
    switch(job) {
        case "developer":
            return `${name} develop cool apps.`
            break;
        case "designer":
            return `${name} desgins awesome websites.`
            break;
        default:
            return `${name} does something else.`
            break;
    }
};

console.log(myProfile("developer", "Marvin"));
console.log(myProfileCommon("designer", "Lesly"));
console.log(myProfileCommon("driver", "José"));

function logName() {
    var name = "John Doe";
    console.log(name);
}

logName();

// Ejemplo de Expresión de función ejecutada inmediatamente (IIFE)

(function() {
    var name = "John Doe";
    console.log(name);
})();

(function(name) {
    console.log(name);
})("John Doe");


// Reto Fibonacci

function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciSequence(limit) {
    if (limit < 1) return console.log("El límite debe ser mayor a 1");
    
    for (var i = 0; i < limit; i++) {
        console.log( fibonacci(i) );
    }
}

fibonacciSequence(7);