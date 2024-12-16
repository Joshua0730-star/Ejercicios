function drawRace(indices, length) {
    let lanes = '';
    

    for (let i = 0; i < indices.length; i++) {
        let spaces = ' '.repeat(indices.length - i - 1);
        let currentElm = indices[i];
        let snow = '~';
        let currentText = '';

        if (currentElm === 0) {
            lanes += spaces + snow.repeat(length) + ` /${i + 1}` + '\n';
            continue;
        }

        currentText = snow.repeat(length).split('');

        if(currentElm < 0){
            currentText[currentElm + length] = 'r';
        }
        currentText[currentElm] = 'r';
        currentText = spaces + currentText.join('') + ` /${i + 1}` + '\n';
        lanes += currentText;
    }
    return lanes;
}



console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/


console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/



console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
// let arr = [1, 4, 7, 5];

// const lastIdx = arr.length - 1;
// console.log(lastIdx);


