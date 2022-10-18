// Ejemplo de acceso a nodos de DOM

var elementById = document.getElementById("myElement");
var link = document.body.getElementsByTagName("a")[0]; // Encontrar elementos por nombre de etiqueta
var elementByClass = document.body.getElementsByClassName("main"); // Encontrar elementos por nombre de class

// console.log(elementById);
// console.log(link);
// console.log(elementByClass);

// Ejemplo de manipulación de DOM

var paragraphs = document.body.getElementsByTagName("p");

console.log("Colección de nodos ", paragraphs);

console.log("Primer nodo: ", paragraphs[0]);
console.log("Segundo nodo: ", paragraphs[1]);

document.body.insertBefore(paragraphs[1], paragraphs[0]);

// Ejemplo de creación de nodos