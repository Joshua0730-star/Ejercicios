function memoizedFactorial() {
    const cache = {}; // Almacén para resultados calculados

    return function factorial(n) {
        if(n in cache) {
            // Retorna el resultado si ya está en cache
            console.log(`Usando cache para ${n}`);
            return cache[n];
        }

        // Calcula el factorial y guarda el resultado
        if(n === 0 || n === 1) return 1;

        const result = n * factorial(n - 1);
        console.log(n, result);
        cache[n] = result;
        return result;
    };
}

const factorial = memoizedFactorial();

console.log(factorial(5)); // Calcula y almacena
console.log(factorial(5)); // Recupera desde cache



// FIBONACCIO AVANZADO

// function memoizedFibonacci() {
//     const cache = {}; // Almacén para resultados calculados

//     return function fibonacci(n) {
//         if (n in cache) {
//             console.log(`Usando cache para ${n}`);
//             return cache[n];
//         }

//         if (n === 0) return 0;
//         if (n === 1) return 1;

//         const result = fibonacci(n - 1) + fibonacci(n - 2);
//         cache[n] = result; // Guarda el resultado en cache
//         return result;
//     };
// }

// const fibonacci = memoizedFibonacci();

// console.log(fibonacci(10)); // Calcula y almacena
// console.log(fibonacci(10)); // Recupera desde cache


/*
¿Cuándo usar memoización?
La memoización es ideal para problemas que cumplen con estas características:

Subproblemas repetitivos: La solución involucra el mismo cálculo varias veces.
Funciones puras: El resultado de la función depende únicamente de sus argumentos (sin efectos secundarios).
Recursividad: Especialmente útil en algoritmos como Fibonacci, factorial, o búsqueda de caminos en grafos.
 */


/*
Optimización de algoritmos recursivos:

Los desarrolladores usan memoización para evitar cálculos redundantes en problemas de programación dinámica.
Ejemplo: Resolver problemas como el Knapsack problem o Longest Common Subsequence.
Mejorar rendimiento en aplicaciones web:

Memoización se usa en bibliotecas como React para evitar renderizados innecesarios, utilizando hooks como useMemo.
Frameworks de Machine Learning:

Los modelos a menudo recalculan valores costosos (e.g., funciones de activación). Los expertos aplican memoización para acelerar el entrenamiento.
 */