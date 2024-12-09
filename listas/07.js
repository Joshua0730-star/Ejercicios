// 
const people = [
    {name: 'joshua', age: 17, job: 'developer', hobbies: ['play', 'music', 'programing']},
    {name: 'andres', age: 23, job: 'waiter', hobbies: ['parties', 'soccer', 'eating']},
    {name: 'camilo', age: 19, job: 'teacher', hobbies: ['play', 'sing', 'dance']},
    {name: 'santiago', age: 20, job: 'pilot', hobbies: ['parties', 'drum', 'travel']},
    {name: 'alejandra', age: 15, job: 'singer', hobbies: ['sing', 'music', 'dance']}
]


// Filtrar a los mayores de edad

// function filter(arr){
//     const older = [];
//     arr.forEach(({age, name}) => {
//         if(age > 18){
//             older.push(name);
//         }
//     });

//     return older;
// }


// console.log(filter(people));


// agrupar los que tienen 2 o mas hobbies en commun , mostrar un objeto donde las key sean los hobbies y contenga un array con el nombre de esas personas, y filtrar donde haya 2 o mas hobbies en commun por las personas



// con null


// console.time('utilzando null');
// function similar(arr){
//     const hobby = {}    

//     // se itera y se extraen las propiedades necesarias en cada iteracion!
//     arr.forEach(({ hobbies, name }) => {
//         hobbies.forEach((element) => { // se iteran todos los arrays
//             if(!hobby[element]) hobby[element] = []; // si no existe , crea un array

//             hobby[element].push(name);
            
//         })
//     });

//     for(let prop in hobby){
//         if(hobby[prop].length < 2){ // <--- filtrando solo los que coinciden mas de 2 veces
//             hobby[prop] = null; // <--- es preferible esto antes que " delete " en los objetos!
//         }
//     }

//     return hobby;
// }

// console.log(similar(people));
// console.timeEnd('utilzando null');




// con delete

console.time('utilzando delete');
function similar(arr){
    const hobby = {}    

    // se itera y se extraen las propiedades necesarias en cada iteracion!
    arr.forEach(({ hobbies, name }) => {
        hobbies.forEach((element) => { // se iteran todos los arrays
            if(!hobby[element]) hobby[element] = []; // si no existe , crea un array

            hobby[element].push(name);
            
        })
    });

    for(let prop in hobby){
        if(hobby[prop].length < 2){ // <--- filtrando solo los que coinciden mas de 2 veces
            delete hobby[prop]; // <--- es preferible esto antes que " delete " en los objetos!
        }
    }

    return hobby;
}

console.log(similar(people));
console.timeEnd('utilzando delete');


// let obj = {};

// let arr = [1, 2, 3 ,4];

// for(let i = 0; i < 4; i++){
//     obj[`pairs-${i}`] = [...arr];
// }

// console.log(obj);