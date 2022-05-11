//tenemos 3 funciones equivalentes, mientras mneos escriba mejor

function suma(a, b){
    return a+b;
}

console.log(suma(2,3))

// arrow function son anónimas 

const sum2 = (a,b) => {
    return a+b;
}

const sum3 = (a,b) => a+b //solo una instruccion sin llave y con return implicito

console.log(sum2(3,3))
console.log(sum3(9,9))

// funcion que toma una lista y genera otra lista de cada uno de los numeros con una operacion
// <list>map(funcion) tomo lista y genero otra igual pero tra shaber generado una operacion en cada uno