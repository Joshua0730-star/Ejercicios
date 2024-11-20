/*
 * EJERCICIO:
 * Crea dos programas que reciban dos parámetros definidos como variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime el valor de las
 *   variables originales y las nuevas, comprobando que se ha invertido su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

// Programa ----> por valor

let n1 = 20; 
let n2 = 40;


function swap(elm1, elm2) {
    let temp = elm1;
    elm1 = elm2;
    elm2 = temp;
    return [elm1, elm2];
}


// Diferencias 

console.log(n1, n2); // <--- originales

let [n3, n4] = swap(n1, n2);

console.log(n3, n4); // <--- nuevas


// Programa ----> por referencia


let obj1 = {
    nombre: 'joshua',
    edad: 20,
    trabajo: 'programador'
}

let obj2 = {
    nombre: 'lena',
    edad: 40,
    trabajo: 'profesora'
}

console.log(obj1, obj2); // <--- originales

let [obj3, obj4] = swap(obj1, obj2);

console.log(obj3, obj4); // <--- nuevas