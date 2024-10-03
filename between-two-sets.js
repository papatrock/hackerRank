'use strict';

const fs = require('fs');

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

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function getMdc(n1,n2)
{
    if(n2 ==0)
        return n1;

    return getMdc(n2,n1%n2);
}

function getMmc(n1,n2){
    if(n1 === 0 || n2 === 0)
        return 0;
    
    return Math.abs(n1 * n2) / getMdc(n1, n2);
}

function getTotalX(a, b) {
    // Write your code here

    //mmc do vetor a
    var mmc = a[0];
    for(var i = 0; i < a.length; ++i)
        mmc = getMmc(mmc,a[i]);

    //mdc do vetor b
    var mdc = b[0];
    for(var i = 0; i < b.length; ++i)
        mdc = getMdc(mdc,b[i]);

    var multiplo = 0;
    var result = 0;

    while(multiplo <= mdc){
        multiplo += mmc;

        if(mdc % multiplo == 0)
                ++result;
    }

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
