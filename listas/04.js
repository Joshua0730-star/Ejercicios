// test 1
const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]


const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

// function getInventory(arr) {
//     if(!arr.length) return {}; 
    
//     const inventory = {}; // <--- objeto de retorno
//     for(let obj of arr) {
//         let category = obj['category'];
//         let name = obj['name'];
        

//         inventory[category] ||= {};
//         if(inventory[category][name]) {
//             inventory[category][name] += obj['quantity'];
//             continue;
//         }
//         inventory[category][name] = obj['quantity'];
        
//     }
    
//     return inventory;
// }



function getInventory(arr) {
    if(!arr.length) return {}; 
    
    const inventory = {}; // <--- objeto de retorno
    
    arr.forEach(obj => {
        let category = obj['category'];
        let name = obj['name'];

        inventory[category] ||= {};
        if(inventory[category][name]) {
            inventory[category][name] += obj['quantity'];
            return;
        }
        inventory[category][name] = obj['quantity'];
    });

    return inventory;
}

console.log(getInventory(inventory));
// console.log(getInventory(inventory2));
// console.log(getInventory([]));



