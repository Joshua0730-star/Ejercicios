// Solución 1: Usando un enfoque directo con manejo de índices
function moveTrain(board, mov) {
    const directions = { 'L': [0, -1], 'R': [0, 1], 'U': [-1, 0], 'D': [1, 0] };
    const rows = board.length;
    const cols = board[0].length;

    // Buscar la posición de la locomotora y la cola del tren
    let headRow, headCol, trainPositions = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === '@') {
                headRow = i;
                headCol = j;
            }
            if (board[i][j] === '@' || board[i][j] === 'o') {
                trainPositions.push([i, j]);
            }
        }
    }

    // Calcular la nueva posición de la cabeza
    const [dRow, dCol] = directions[mov];
    const newRow = headRow + dRow;
    const newCol = headCol + dCol;

    // Verificar los límites del tablero
    if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
        return 'crash';
    }

    // Verificar la celda de destino
    const targetCell = board[newRow][newCol];
    if (targetCell === 'o') {
        return 'crash';
    } else if (targetCell === '*') {
        return 'eat';
    }

    // Mover el tren
    trainPositions.unshift([newRow, newCol]); // Nueva cabeza
    trainPositions.pop(); // Remover cola

    return 'none';
}

// Ejemplo de uso
const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
];


// const position = board.findIndex(operation)

// console.log(position);


console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha



