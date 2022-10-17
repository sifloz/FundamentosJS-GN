var jsonPeopleAPI = [
    {
        firstName: "John",
        birthYear: 1990,
        job: "Developer",
        language: "Python",
        skills: ["Critical thinkings"],
        address: "CDMX"
    },
    {
        firstName: "Jane",
        birthYear: 1989,
        job: "Designer",
        language: "CSS",
        skills: ["Creative thinking"],
        address: "Monterrey"
    },
];

// JSON -> JavaScript Object Notation

var _john = {
    firstName: "John",
    birthYear: 1990,
    job: "Developer",
};

var _jane = {
    firstName: "Jane",
    birthYear: 1989,
    job: "Designer"
};

var _marie = {
    firstName: "Marie",
    birthYear: 1988,
    job: "Analyst"
};

// Plantilla 

var Person = function(name, year, job) {
    this.firstName = name
    this.birthYear = year
    this.job = job
}

var PersonDetail = function(address) {
    this.address = address
    this.printAddress = function() {
        console.log(this.address)
    }
}

// Ejemplo de Plantilla a través de class

// class Person {
//     constructor(name, year, job) {
//         this.firstName = name;
//         this.birthYear = year;
//         this.job = job;
//     }
// };

var jane = new Person("Jane", 1989, "Designer");
var marie = new Person("Marie", 1988, "Analyst");

var people = [john, jane, marie];

//console.log(people);

// Ejemplos de objetos

// Number();
// String();
// Boolean();
// String();
// Array();
// Object();

var Vec = function(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function(otherVec) {
        return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    },
    this.minus = function(otherVec) {
        return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    },
    this.distance = function() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
};

var vec1 = new Vec(1, 2);
var vec2 = new Vec(2, 3);

// console.log("Suma de vec1 + vec2: ", vec1.plus(vec2));
// console.log("Suma de vec1 + vec1: ", vec1.plus(vec1));
// console.log("Resta de vec1 - vec2: ", vec1.minus(vec2));
// console.log("Distancia de 0,0 a vec1: ", vec1.distance());
// console.log("Distancia de 0,0 a vec2: ", vec2.distance());

var Developer = function(name, birthYear, skills, language, address) {
    Person.call(this, name, birthYear, "Developer") // Herencia
    PersonDetail.call(this, address) // Multiple herencia (polimorfismo)
    // Person.call(this, parámetros del constructor de Person)
    this.skills = skills
    this.language = language
    this.searchAddress = function(value) {
        this.printAddress(); // Llamada a función heredada
        return this.address?.toLowerCase() === value?.toLowerCase() // Uso de propiedad heredada
    }
}

var jaime = new Developer(
    "Jaime",
    1990,
    [
        "Cricital thinking",
        "Analytic thinking"
    ], "Python", "Ciudad de México");

console.log("Objeto Jaime: ", jaime); 
console.log("Jaime vive en Monterrey? ", jaime.searchAddress("Monterrey"))
console.log("Jaime vive en Ciudad de México? ", jaime.searchAddress("ciudad de méxico"))

var createPersonObjects = function(peopleArray) {
    var personObjects = [];

    for (var i = 0; i < peopleArray.length; i++) {
        personObjects.push(new Developer(
            peopleArray[i].firstName,
            peopleArray[i].birthYear,
            peopleArray[i].skills,
            peopleArray[i].language,
            peopleArray[i].address
        ))
    }

    return personObjects;
}

console.log(createPersonObjects(jsonPeopleAPI))

var Group = function() {
    this.members = []
    this.add = function(value) {
        this.members.push(value)
    }
    this.has = function() {
        return this.members.length > 0;
    }
    this.searchElementImperative = function(seekMembers) {
        var has1 = false ;
        for (let index = 0; index < this.members.length; index++) {
            has1= this.members[index]==seekMembers ? true:has1;
        }
        return has1;
    }
    this.searchElementDeclarative = function(seekMembers) {
        return this.members.some(element => element === seekMembers)
    }
    this.createGroup = function(elementsArray) {
        var group = new Group();
        for (var i = 0; i < elementsArray.length; i++) {
            group.add(elementsArray[i])
        }
        return group;
    }
}
var myGroup = new Group();

myGroup.add(8);
myGroup.add(5);
// console.log(myGroup.searchElementImperative(8))
// console.log(myGroup.searchElementImperative(2))
// console.log(myGroup.searchElementDeclarative(8))
// console.log(myGroup.searchElementDeclarative(2))

//console.log(myGroup)

Person.prototype.calculateAge = function() {
    var today = new Date();
    var year = today.getFullYear();

    console.log( year - this.birthYear);
}

var john = new Person("John", 1990, "Developer");

// console.log(john)

// john.calculateAge();
// jane.calculateAge();
// marie.calculateAge();