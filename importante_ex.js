//definimos funciones en base a otras

const multiply = (a,b) => a * b;
const duplicate = a => multiply(2,a);
const triplicate = a => multiply(3,a);

const doble = numbers => numbers.map(x => duplicate(x))


//currying cambiar dimensionalidad de una funcion ---> concepto clave al anidar funciones 