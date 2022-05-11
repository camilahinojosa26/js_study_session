const isEven = (x) => x % 2 === 0;



const evenNumbers = numbers => {
    //filtrar numeros pares
    //adentro le paso la funcion a evaluar, los que tengan True van a sobrevivir, tengo que pasar 
    //una funcion comparativa, paso una condicion y esa condicion es una FUNCION
    //las cosas se logrararn anidando funciones
    // return numbers.filter(x => isEven (x)); // dentro del parentesis es una funcion que recibe a un numero y llama a otra funcion
    //por eso son mega importantes las arrow fuctions
    //callbacks una funcion que llama a otra
    // esto es la programacion declarativa te digo lo que recibes, que usas y lo que quiero, sin describir como hacerlo
    // otra opcion es : 
    return numbers.filter(isEven);
}
const oddNumbers = numbers =>
numbers.filter(x=> !isEven(x));

const numbers = [1,2,3,4,5,11,12];
console.log(evenNumbers(numbers));
console.log(oddNumbers(numbers));

//.filter(funcion) evalua cada elemento en la funcion que yo diga 