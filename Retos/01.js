function drawRace(indices, length) {
    return indices.map((position, idx) => {
        let lane = Array(length).fill('~');
        position = position < 0 ? position + length : position;

        if(position > 0 && position <= length) lane[position] = 'r';
        return ' '.repeat(indices.length - idx - 1) + lane.join('') + ` /${idx + 1}`
    }).join('\n')
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