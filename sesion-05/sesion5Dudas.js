//Reto 3
function Triangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    //this.getArea = () =>this.a*this.b/2
}

Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c
}

Triangle.prototype.getArea = function(){
        return this.a*this.b/2
} 

var triangulo1 = new Triangle(1,2,3);



console.log(triangulo1.getPerimeter());
console.log(triangulo1.getArea());

//Orientacion a prototipos (usando json)

var Person = function(name, birthYear){
    this.name = name;
    this.birthYear = birthYear;
    this.saluda=function(){
        console.log("Hola")
    }
}


var createPerson = function(name, birthYear){
    return{
        name,
        birthYear,
        saluda: function(){
            console.log("Hola")
        },
        despidete: function(){
            console.log("adios")
        }
    }
}

var createDeveloper = function(name, birthYear, skill){
    var personaHeredar = createPerson(name, birthYear);
    var desarrollador = {
        ...personaHeredar,
        skill,
    }
    return desarrollador
}



var person = createPerson("Uriel",2000);


var person2 = new Person("Hector", 2000);

var person3 = new Person("Erandi", 2000);

var desarrollador = createDeveloper("Uriel",2000,"Programa chido")

console.log(person);
console.log(person2);
console.log(person3);
console.log(desarrollador);

//Postwork

// Forma constructor

var Task = function(name){
    this.name = name,
    this.state = false,
    this.changeState = ()=>{this.state = ! this.state}
}

var recogerCuarto = new Task("Levantar mi cuarto");

//Forma orientada a prototipos  (usando json)

// var creaTarea = function(name){
//     return{
//         name:name,
//         state:false,
//         changeState:function(){
//             this.state = !this.state
//         }
//     }
// }

// var recogerCuarto = creaTarea("Levantar mi cuarto")

console.log(recogerCuarto);
recogerCuarto.changeState()
console.log(recogerCuarto);