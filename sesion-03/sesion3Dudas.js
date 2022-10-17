function saludoPersonalizado(nombre, saludo){
    console.log(saludo(nombre));
}

saludoPersonalizado("Uriel", (x)=>("Hola " + x));
saludoPersonalizado("Hector", (x)=>("Adios " + x));
saludoPersonalizado("Erandi", (x)=>("Buenos días " + x));

function multRecursiva(x,y){
    return multRecursivaAuxiliar(x,y,0);
}

function multRecursivaAuxiliar(x, y, resultado){
    return y == 0 ? resultado : multRecursivaAuxiliar(x,y-1,resultado+x)
}

console.log(multRecursiva(4,3))
