/*
escribe una funcion que reciba una lista de enteros(puede contener duplicados) y devuelva una nueva lista con los mismos elementos pero sin elementos repetidos, ordenados de menor a mayor.
 */

// 1  forma --- usando for
// function removeDuplicates(lista) {
//     let nuevaLista = [];
//     for(let i = 0; i < lista.length; i++) {
//         if(nuevaLista.indexOf(lista[i]) == -1) {
//             nuevaLista.push(lista[i]);
//         }
//     }

//     nuevaLista.sort((a, b) => a - b);
//     return nuevaLista;
// }

// console.log(removeDuplicates([10, 2, 3, 1, 6, 5, 4, 3, 1, 3]));


// 2 forma --- usando Set
function removeDuplicates(lista) {
    const set = [... new Set(lista)];
    return set.sort((a, b) => a - b);
}

console.log(removeDuplicates([10, 2, 3, 1, 6, 5, 4, 3, 1, 3]));