/*
Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:


**********
* Carlos *
* Juan   *
**********
*/

function createFrame(names) {
    // Encontrar la longitud del nombre más largo
    const maxLength = Math.max(...names.map(name => name.length));
    const frameWidth = maxLength + 2; // Margen de un espacio a cada lado
    
    // Crear el borde superior e inferior
    const border = '*'.repeat(frameWidth + 2); // +2 por los bordes de asterisco
    
    // Formatear cada línea con nombres alineados a la izquierda
    const framedNames = names.map(name => `* ${name.padEnd(maxLength, ' ')} *`);
    
    // Combinando todo en el marco
    return [border, ...framedNames, border].join('\n');
}




// Ejemplo de uso
const names = ["camilo", "joshua", "daniela", "ana"];
console.log(createFrame(names));





