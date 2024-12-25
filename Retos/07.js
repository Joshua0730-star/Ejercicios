function calculatePrice(ornaments) {
    let amount = 0; // <--- Getting

    const values = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100,
    }

    for(let i = 0; i < ornaments.length; i++){
        const currentElm = ornaments[i];
        const previousElm = ornaments[i - 1];
        
        if(typeof values[currentElm] === 'undefined') return undefined;
        if(values[previousElm] < values[currentElm]){
            amount -= values[previousElm];
            amount += values[currentElm] - values[previousElm];
        } else {
            amount += values[currentElm];
        }
        
    }
    return amount
}

// There is an issue😒!

console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'))   // 4   (5 - 1)
console.log(calculatePrice('o*'))   // 6   (5 + 1)
console.log(calculatePrice('*o*')) // 5  (-1 + 5 + 1) 
console.log(calculatePrice('**o*')) // 6  (1 - 1 + 5 + 1) 
// calculatePrice('o***') // 8   (5 + 3)
console.log(calculatePrice('*o@') ) // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'))  // 49  (-1 + 50)
// calculatePrice('@@@')  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'))   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'))  // undefined (Z es desconocido)


// const obj = {
//     name: 'joshua',
//     age: 17,
// }


// console.log(obj.job);