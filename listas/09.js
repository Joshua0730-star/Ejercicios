function fixPackages(packages) {
    // Mientras haya paréntesis en el string
    while (packages.includes('(')) {
        // Último paréntesis de apertura
        const open = packages.lastIndexOf('(');
        // Primer paréntesis de cierre después del último de apertura
        const close = packages.indexOf(')', open);

        // Extraer el contenido entre los paréntesis
        const content = packages.slice(open + 1, close);

        // Invertir el contenido
        const reversed = content.split('').reverse().join('');

        // Reemplazar el contenido original (incluyendo los paréntesis) por el invertido
        packages = packages.slice(0, open) + reversed + packages.slice(close + 1);
    }

    return packages;
}

// Ejemplo de uso
console.log(fixPackages('a(bc(def)g)h')); // ➞ "agdefcbh"


// let test = '123401235';

// console.log(test.indexOf('3', 4));