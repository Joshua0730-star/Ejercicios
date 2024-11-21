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


/*
Optimización de algoritmos recursivos:

Los desarrolladores usan memoización para evitar cálculos redundantes en problemas de programación dinámica.
Ejemplo: Resolver problemas como el Knapsack problem o Longest Common Subsequence.
Mejorar rendimiento en aplicaciones web:

Memoización se usa en bibliotecas como React para evitar renderizados innecesarios, utilizando hooks como useMemo.
Frameworks de Machine Learning:

Los modelos a menudo recalculan valores costosos (e.g., funciones de activación). Los expertos aplican memoización para acelerar el entrenamiento.
 */