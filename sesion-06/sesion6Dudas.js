//Ejemplo filter que es una función pura

// var dulces = [
//     {
//         nombre: "Kranky",
//         tipo: "Chocolate"
//     },
//     {
//         nombre: "Carlos V",
//         tipo: "Chocolate"
//     },
//     {
//         nombre: "Swinkles",
//         tipo: "Picosito"
//     }
// ];

// function suma(x, y){
//     return x + y;
// }

// console.log(dulces);

// var dulceFavorito = dulces.find(function(dulce){
//     var valor = dulce.tipo === "Gomitas";
//     return valor;
// });

// console.log(dulces);

// console.log(dulceFavorito);

// Ejemplo aplicación peliculas

var peliculas = [];

// Forma orientada a prototipos (json)
function creaPelicula(nombre, imagen, des){
    var pelicula = {
        nombre,
        imagen,
        descripcion:des
    }
    return pelicula;
}

//Forma constructor

var Pelicula = function(nombre, imagen, des){
    this.nombre = nombre;
    this.imagen = imagen;
    this.descripcion = des;
}

// Forma impura

function subirInfo(nombre, imagen, des){
    var nuevaPelicula = new Pelicula(nombre, imagen, des) // var nuevaPelicula = creaPelicula(nombre, imagen, des);
    peliculas.push(nuevaPelicula);
}

// Forma pura

function subirInfoPuro(peliculas, nombre, imagen, des){
    var nuevaPelicula = new Pelicula(nombre, imagen, des); // var nuevaPelicula = creaPelicula(nombre, imagen, des);
    var nuevasPeliculas = peliculas.map((pelicula)=>pelicula);
    nuevasPeliculas.push(nuevaPelicula);
    return nuevasPeliculas;
}

// NO SE PUEDE HACER PURA!!!
function mostrarInfo(){
    // Proximamente 
}

