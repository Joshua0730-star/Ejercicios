// pilas ---> ultimo en entrar, primero en salir
const pilas = [];

pilas.push('juan'); // ['juan']
pilas.push('carlos'); // ['juan', 'carlos']
pilas.push('daniel');   // ['juan', 'carlos', 'daniel']

console.log(pilas);

const firstOut = pilas.pop();

console.log(firstOut); // primero en salir
console.log(pilas);




// colas ----> primero en entrar, primero en salir

const colas = [];

colas.push('juan');
colas.push('carlos');
colas.push('daniel');


console.log(colas);

const firstIn = colas.shift();

console.log(firstIn); // primero en entrar
console.log(colas);