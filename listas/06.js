const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]

// function organizeShoes(shoes) {
//     const pairs = [];


//     for(let i = 0; i < shoes.length; i++){
//         let types = shoes[i].type;
//         let sizes = shoes[i].size;
//         for(let j = i; j < shoes.length - i - 1;j++){
//             if(sizes === shoes[j].size && types !== shoes[j].type){
//                 pairs.push(sizes);
//             }
//         }
//     }
//     return pairs;
// }

function organizeShoes(shoes) {
    const counts = {};

    // Contar las botas por tamaño y tipo
    shoes.forEach(({ type, size }) => {
        if (!counts[size]) counts[size] = { I: 0, R: 0 };
        counts[size][type]++;
    });

    // Calcular los pares disponibles
    const result = [];
    for (const size in counts) {
        const pairs = Math.min(counts[size].I, counts[size].R);
        for (let i = 0; i < pairs; i++) {
            result.push(Number(size));
        }
    }

    return result;
}

console.log(organizeShoes(shoes));
console.log(organizeShoes(shoes2));
console.log(organizeShoes(shoes3));


