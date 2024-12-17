// const arr = [1.5, 2.1, 1.6, 2.7];

// function box(array){
//     const obj = {};
//     array.forEach((element, index) => {
//         obj[Math.floor(element)] ??= [];

//         obj[Math.floor(element)].push(element);
//     });

//     return obj;
// }

// // forEach ---> NO devuelve un array
// console.log(box(arr));




// Map


// const array = [2, 4, 6, 1, 5];


// function box(arr){
//     return arr.map((elm, idx) => {
//         let shapes = {};

//         shapes[idx] = elm
//         return shapes; // <-- simboliza un push hacia el array de retorno
//     })
// }



// console.log(box(array));





// constructor Array()

 //crea un array a partir de una longitud especificada y con "fill()" lo rellenamos con el argumento deseado


const arr = Array(4).fill('*')

console.log(arr);


console.log(Array.from( {length: 8}).fill('_'))