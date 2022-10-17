function changeTaskValue(isCompleted){
    isCompleted = !isCompleted;
    return isCompleted;
}

var recogiMiCuarto = false;

console.log(recogiMiCuarto)

recogiMiCuarto = changeTaskValue(recogiMiCuarto);

console.log(recogiMiCuarto);

recogiMiCuarto = changeTaskValue(recogiMiCuarto);

console.log(recogiMiCuarto);

var miPrimerArreglo = [1, "Uriel", [0, 1, 2]];

console.log(miPrimerArreglo[2][2]);

miPrimerArreglo.push("Erandi");

console.log(miPrimerArreglo);

miPrimerArreglo[3] = 4;

console.log(miPrimerArreglo);

for(var i = 0; i < miPrimerArreglo.length; i++ ){
    console.log(miPrimerArreglo[i]);
}

// function pushElement(arr, index, val){
//     var arregloNuevo = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (i === index) 
//             arregloNuevo[i] = val;
//         arregloNuevo.push(arr[i])
//     }
//     return arregloNuevo;
// }

function pushElement(arr, index, val){
    var arregloNuevo = [];
    for (var i = 0; i < arr.length; i++) {
        if (i === index){ 
            arregloNuevo.push(val);
        }
        arregloNuevo.push(arr[i])
    }
    return arregloNuevo;
}

miPrimerArreglo = pushElement(miPrimerArreglo,1,"Hector");

console.log(miPrimerArreglo);

console.log(miPrimerArreglo.splice(1,2));

console.log(miPrimerArreglo);



miPrimerArreglo = miPrimerArreglo.splice()

var numeros = [[0,1],[1,2],[2,3],[3,4]];

var dobles = numeros.map(function(arreglo){
    return arreglo.map(numero => numero * 2);
});

console.log (numeros);

console.log(dobles);

var bandas = ["ACDC", "Queen", "Justin Beiber"];

var bandasCorregidas = bandas.filter((banda)=>banda!=="Justin Beiber");

console.log(bandas);

console.log(bandasCorregidas);

var tarea = {
    nombre: "Levantar Cuarto",
    status: false, 
}

console.log(tarea["nombre"]);
console.log(tarea.status);
console.log(tarea.nombres);

var tareas = [
    {
        nombre: "Levantar Cuarto",
        status: false, 
    },
    {
        nombre: "Lavar platos",
        status: false, 
    },
];

var tareasCompletadas = tareas.filter((elemento)=> elemento.status);

console.log(tareasCompletadas)


