// Matriz 

let list = [];

for(let i = 0; i < 3; i++) {
    list.push([]);
    for(let j = 0; j < 3; j++) {
        list[i].push('*');
    }
}

console.log(list);


// // Crear una matriz 3x3 usando map
// const matrix = Array.from({ length: 3 }, () => Array(3).fill(0));

// console.log(matrix);
