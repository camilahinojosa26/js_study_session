const square = x => x * x;
const squares = numbers => numbers.map(square);


const numbers = [1,2,3,4,5,6,7,8,9];
console.log(squares(numbers));

//map retorna otra lista, la original esta intacta

console.log(numbers)
// clave --> no modificar los argumentos originales, hay que generar UNA COPIA
//por eso usamos constantes para no permitir que se modifiquen las cosas

const squareRoot = x => x ** 0.5;
const more_sq = numbers => numbers.map(squareRoot)

console.log(more_sq(numbers));