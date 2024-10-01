'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {   
    return inputString[currentLine++];
}

function plusMinus(arr) {
    var zero = 0, minorZero = 0, bigerZero = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) bigerZero++;
        else if (arr[i] < 0) minorZero++;
        else zero++;
    }

    const total = arr.length;
    console.log((bigerZero / total).toFixed(6));
    console.log((minorZero / total).toFixed(6));
    console.log((zero / total).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}
