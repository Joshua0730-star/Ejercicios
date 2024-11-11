// EJERCICIO 1
/*
Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
*/


// Palindromos
let palabra_1 = 'caballo';

function esPalindromo(word){
    if(!(word=== word.split('').reverse().join(''))){
        console.error(`La palabra ${word} no es polindroma!`);
        return 0
    } 

    console.log(`La palabra ${word} es polindroma`);
    return 0;
}


// Anagramas
let palabra_2 = 'maraca';
let palabra_3 = 'camara';


function esAnagrama(word, word_2){
    if(word.length !== word_2.length){
        console.error(`Las palabras ${word} y ${word_2} no tienen la misma longitud de caracteres`);
        return 0;
    }

    let ordered_word = word.split('').sort().join('');
    let ordered_word_2 = word_2.split('').sort().join('');
    if(ordered_word === ordered_word_2){ 
        console.log(`las palabras ${word} y ${word_2} son anagramas`);
        return 0;
    }

    console.error(`las palabras ${word} y ${word_2} no son anagramas`);
}



// Isogramas

function esIsograma(palabra) {
    palabra = palabra.toLowerCase();  // Convertimos a minúsculas para ignorar mayúsculas y minúsculas

    const letras = new Set();  // Usamos un Set para almacenar letras únicas

    for(const letra of palabra) {  // Iteramos sobre cada letra de la palabra
    if (letras.has(letra)) {  // Si la letra ya está en el Set, no es un isograma
        return false;
    }
    letras.add(letra);  // Agregamos la letra al Set
    }

    return true;  // Si no hay letras repetidas, es un isograma
}

esPalindromo(palabra_1);
esAnagrama(palabra_2, palabra_3);
console.log(esIsograma("murciélago")); // true
console.log(esIsograma("programación")); // false