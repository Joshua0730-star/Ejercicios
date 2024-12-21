/* 1)
Descripción: Dado un array de números enteros, crea un nuevo array donde cada elemento sea el doble del elemento original.
 */

// const numeros = [1, 2, 3, 4, 5];

// const duplicated = numeros.map(num => num * 2);
// console.log(duplicated);
// // Output : [2, 4, 6, 8, 10]



/* 2)
Descripción: Dado un array de palabras, devuelve un nuevo array que contenga la longitud de cada palabra.
 */


// const palabras = ["manzana", "pera", "plátano", "kiwi"];


// const lens = palabras.map(word => word.length)
// console.log(lens);
// // Output : [7, 4, 7, 4]

/* 3)
Descripción: Dado un array de nombres en minúsculas, transforma cada nombre a mayúsculas utilizando map().
 */


// const nombres = ["ana", "luis", "maria", "pedro"];

// const capitalized = nombres.map(name => {
//     return name.toUpperCase()
//     // return name.charAt(0).toUpperCase() + name.slice(1);
// })
// console.log(capitalized);
// // Output : ["ANA", "LUIS", "MARIA", "PEDRO"]


/* 4)
Descripción: Dado un array de precios (números), calcula un nuevo array donde cada precio tenga un 10% adicional (simulando un impuesto). Redondea el resultado a dos decimales.
 */


// const precios = [10, 20, 30, 40];

// const prices_iva = precios.map( price => {
//     price += price * 0.10;

//     return price.toFixed(2);// <--- para convertir en decimal y el numero que se pasa como argumento son los decimales
// })

// console.log(prices_iva);
// // Output : [11.00, 22.00, 33.00, 44.00]





/* 5)
Descripción: Dado un array de números, devuelve un nuevo array que contenga únicamente los números pares del array original, pero multiplicados por 3.
 */


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// const pares = numeros.filter(num => num % 2 === 0).map(number => number * 3);

// console.log(pares);


// // Output : [6, 12, 18, 24]





// // let num = 10;

// // let float = num.toFixed(2)
// // console.log(float);




/* 6)
Descripción: Dado un array de objetos que representan productos, transforma el array para que cada objeto contenga solo el nombre del producto en mayúsculas y su precio con un impuesto del 15%.
 */


// const productos = [
//     { id: 1, nombre: "camisa", precio: 100 },
//     { id: 2, nombre: "pantalón", precio: 200 },
//     { id: 3, nombre: "zapatos", precio: 300 },
// ];


// function processed(arr){
//     // iterar sobre el array!
//     return arr.map(({nombre, precio}) => {
//         nombre = nombre.toUpperCase();
//         precio += precio * 0.15;
//         const modified = {nombre, precio};
//         return modified;
//     })
// }

// console.log(processed(productos));
// /* Output:

// [
//   { nombre: "CAMISA", precioConImpuesto: 115 },
//   { nombre: "PANTALÓN", precioConImpuesto: 230 },
//   { nombre: "ZAPATOS", precioConImpuesto: 345 },
// ]
//  */


/* 7)
Descripción: Dado un array de frases, devuelve un nuevo array donde cada elemento sea un objeto con las siguientes propiedades:

longitud: La cantidad de caracteres de la frase.
cantidadPalabras: El número de palabras en la frase.
 */


// const frases = [
//     "JavaScript es increíble",
//     "Me encanta programar",
//     "Resolver problemas es divertido",
// ];


// function organizaded(arr){
//     return arr.map((frase) => {
//         // Capturamos las props
//         const len = frase.length - 1;
//         const words = frase.split(' ').length;
//         // retorno del objeto
//         return {longitud: len, cantidadPalabras: words};
//     })
// }
// // length

// console.log(organizaded(frases));
/* Output:
[
  { longitud: 22, cantidadPalabras: 3 },
  { longitud: 19, cantidadPalabras: 3 },
  { longitud: 29, cantidadPalabras: 4 },
]

 */




/* 8)
Descripción: Dado un array de personas con su nombre y edad, transforma el array para agrupar las personas en categorías según su edad:

"niño" (0-12 años)
"adolescente" (13-17 años)
"adulto" (18-64 años)
"mayor" (65+ años)
El nuevo array debe contener objetos con el nombre de la persona y su categoría de edad.
 */


// const personas = [
//     { nombre: "Juan", edad: 10 },
//     { nombre: "Luis", edad: 15 },
//     { nombre: "Ana", edad: 25 },
//     { nombre: "Pedro", edad: 70 },
// ];

// function categories(arr){
//     return arr.map(({nombre, edad}) => {
//         if(edad < 0) return {nombre, categoria: 'No exíste'}

//         let category = ''
//         if(edad < 18){
//             category = edad < 12 ? 'niño' : 'adolescente';
//         } else {
//             category = edad < 65 ? 'adulto' : 'mayor'
//         }

//         return {nombre, categoria: category};
//     });
// }


// console.log(categories(personas));
// /* Output:
// [
//   { nombre: "Juan", categoria: "niño" },
//   { nombre: "Luis", categoria: "adolescente" },
//   { nombre: "Ana", categoria: "adulto" },
//   { nombre: "Pedro", categoria: "mayor" },
// ]

//  */


/* 9)
Descripción: Dado un array de nombres completos, crea un nuevo array que contenga las siglas (iniciales en mayúsculas) de cada nombre.
 */

// const nombres = [
//     "Juan Pérez",
//     "María López García",
//     "Carlos Alberto Fernández",
// ];

// function iniciales(arr){
//     return arr.map(names => {
//         let siglas = [];
//         names = names.split(' ');
//         names.forEach(str => {
//             siglas.push(str[0]);
//         });

//         siglas = siglas.join('');
//         return siglas;
//     })
// }


// console.log(iniciales(nombres));

/* Output:
["JP", "MLG", "CAF"]
 */



/* 10)
Descripción: Dado un array de palabras, devuelve un nuevo array donde cada palabra esté codificada utilizando el cifrado César con un desplazamiento de 3.
El cifrado César es un tipo de cifrado por sustitución en el que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones más adelante en el alfabeto. Si llegas al final del alfabeto, vuelve al inicio.
 */


const palabras = ["hola", "mundo", "javascript"];

// String.fromCharCode()

// console.log(palabras[0].charCodeAt(3)); <-- devuelve el idx que tiene en el contenedor global de caracteres, y se le pasa el indice de ese caracter

// console.log(String.fromCharCode(97)); <--- retorna el caracter que tiene almcenado en ese indice

// function cifradoCesar(arr) {
//     // const abecedario = [
//     //     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//     // ];
//     return arr.map(words => {
//         let changeChar = '';
//         for (let i = 0; i < words.length; i++) {
//             let currentChar = words[i];

//             let changeNumber = words.charCodeAt(i);
//             currentChar = String.fromCharCode(changeNumber + 3); // el numero de ese caracter sumado 3 posiciones adelante en la colección
//             changeChar += currentChar;
//         }
//         return changeChar
//     });
// }

// // length

// console.log(cifradoCesar(palabras));


//String.fromCharCode() <--- almacen de caracteres , desde el 65 esta la "A"

// Output: ["krod", "pxqgr", "mdydvfulsw"]



/* 11)
Descripción: Dado un array multidimensional de números, devuelve un nuevo array que contenga todos los números planos (sin importar la profundidad) multiplicados por 2.
 */


const numeros = [[1, 2, [3]], 4, [5, [6, 7]]];

function planos(arr){
  return arr.flat(Infinity).map(num => num * 2);
}

console.log(planos(numeros));

// Output: [2, 4, 6, 8, 10, 12, 14]
