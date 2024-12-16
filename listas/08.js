

function inBox(box) {
    let result = false;
    for(let str of box){
        let lastElement = box.length - 1 ;
        if (str.startsWith('*') || str.endsWith('*')){
            result = false
            break;
        }

        if(box[0].includes('*') || box[lastElement].includes('*')){
            result = false
            break;
        }

        if (str.includes('*')) result = true;
        
    }

    return result;
}


console.log(inBox([
    "###",
    "#*#",
    "###"
])) // ➞ true


console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
])) // ➞ true



console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
])) // ➞ false



console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])) // ➞ false



// testing 

// let arr = ['hola', 'como', 'estás', 'crack'];

// let ultimo = arr[- 1];

// console.log(ultimo);