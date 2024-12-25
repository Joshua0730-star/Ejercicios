// const matriz = [
//     [0, 1, 1],
//     [0, 0, 1],
//     [0, 0, 1],
// ]




// function test(arr){
//     const array_modificado = []; 
//     const rows = arr.length; 
//     const cols = arr[0].length;


//     for(let i = 0; i < rows; i++){
//         array_modificado[i] = []
//         for(let j = 0; j < cols; j++){
//             array_modificado[i].push(arr[j][i] * 2); 
//         }
//     }
//     return array_modificado;
// }


// console.log(test(matriz));


function compile(instructions) {

    const register = {}; // box register
    let i = 0; // <-- index of each instruccion
    let command, arg1, arg2; // <-- desctructuring

    while(i < instructions.length){
        // Get the elements😉
        [command, arg1, arg2] = instructions[i].split(' ');
        

        switch(command){
            case 'MOV':
                if(isNaN(arg1)){
                    register[arg2] = register[arg1] || 0;
                } else {
                    register[arg2] = parseInt(arg1, 10);
                }
                break;

            case 'INC':
                register[arg1] = (register[arg1] || 0) + 1; 
                break;

            case 'DEC':
                register[arg1] = (register[arg1] || 0) - 1;
                break;

            case 'JMP':
                if((register[arg1] || 0) === 0){
                    i = parseInt(arg2, 10);
                    continue;
                }
                break;

            default: 
                console.error('Upps😒, hubo un error!');
                break;
        }
        
        i++;
    }



    return register[arg1];
}


const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions))// -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */



// [
//     'INC C', // incrementa c --> c ??= 0 --> 1
//     'DEC B', // b ?== 0 ---> -1
//     'MOV C Y', // y = 1 || 0
//     'INC Y' // y = 2
// ]
