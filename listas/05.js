function createXmasTree(height, char) {
    let tree = '';

    // Construir el triángulo del árbol
    for (let i = 0; i < height; i++) {
        const spaces = '_'.repeat(height - i - 1);
        const stars = char.repeat(2 * i + 1);
        tree += spaces + stars + spaces + '\n';
    }

    // Agregar el tronco
    const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    tree += trunk + '\n' + trunk;

    return tree;
}

const tree = createXmasTree(5, '*');
console.log(tree);
