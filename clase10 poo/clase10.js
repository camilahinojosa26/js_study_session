const amazon = [
    {"name":"Biscuits", "type":"regular", "category":"food", "price":2.0},
    {"name":"Monitor", "type":"prime", "category":"tech", "price":119.99},
    {"name":"Mouse", "type":"prime", "category":"tech", "price":25.50},
    {"name":"dress", "type":"regular", "category":"clothes", "price":49.90},
]

//simular checkout de amazon
//1 funcion extraer elementos prime
//2 extraer elementos no prime

const prime_products = (amazon) =>{
 return amazon.filter(x=>x.type==="prime");
}

const not_prime_products = (amazon) => {
    return amazon.filter(x=>x.type!=="prime");
}
console.log(prime_products(amazon));
console.log(not_prime_products(amazon));
//-------------------o------------- propuestos por el profesor 

const isPrime = product => product.type ==="prime";
const isNotPrime = product => product.type!=="prime";
const primeItems = amazon => amazon.filter(isPrime);
const notPrimeItems = amazon => amazon.filter(isNotPrime);

console.log(primeItems(amazon));
console.log(notPrimeItems(amazon));

//3 applyCoupon que aplica un 20% de dcto en los productos tech

// const isTech = product => product.category === "tech";
// const techCoupon = amazon => {
//     x= amazon.filter(isPrime)
//     return x*0.8
// }
// const pricesWithCoupon = 

// const prices = (amazon) => {
//     if
// }

// nuemeros dentro del codigo son mala practica, por ello lo mejor es guardarlo en una constante
const TECH_DISCOUNT = 0.8 // constantes cuando representan un valor van e mayúscula
const isTech = product => product.category === "tech";
const getPrice = product => product.price * (isTech(product) ? TECH_DISCOUNT : 1);
    // ahora veamos el codigo con el operador ternario
    //abreviacion de if else (ternary operator)
    //<condicion>? valor si true : valor si false
    //return product.price * (isTech(product) ? TECH_DISCOUNT : 1)};
    // ( si se cumple condicion () : si No se cumple)
    // if (isTech(product)) {
    //     return product.price * TECH_DISCOUNT
    // }
    // return product.price;}
const getPrices = amazon =>amazon.map(getPrice);

console.log(getPrices(amazon))

// ahora veamos el codigo con el operador ternario

//4 hacer funcion total cost (usando reduce)-----> reduce((acc,x)==>{},inicial)

const getTotal = amazon => getPrices(amazon).reduce((total, price)=> total+price ,0 )
//0 es el valor inicial
console.log(getTotal(amazon))