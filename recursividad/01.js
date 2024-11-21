// factorial de un numero usando recursividad - Usa memoización

function factorial(n) {
    // Caso base: el factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva
    return n * factorial(n - 1);
}

// // Uso
// console.log(factorial(5)); // Output: 120

// const tree = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: [{ value: 4, children: [] }, { value: 5, children: [] }]
//         },
//         {
//             value: 3,
//             children: [{ value: 6, children: [] }]
//         }
//     ]
// };

// function traverseTree(node) {
//     console.log(node.value); // Procesar el nodo actual
//     node.children.forEach(child => traverseTree(child)); // Llamada recursiva
// }

// // Uso
// traverseTree(tree);
// // Output:
// // 1, 2, 4, 5, 3, 6


// EJERCICIO 


/*
crea una función recursiva que imprima
* números del 100 al 0.
*/

function imprimirNumeros(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    imprimirNumeros(n - 1);
}

// imprimirNumeros(100); // <--- imprime los números del 100 al 0
