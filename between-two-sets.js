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
function getMultiplos(a,b)
{
    var multiplos = [];
    var i = 1;
    
    //percorre a
    for(var i = 0; i < a.length; ++i)
    {
        const subMult = [];
        subMult[0] = a[i];
        var j = 0;
        var k = 2;
        do{
            ++j;
            subMult[j] = a[i] * k;
            ++k;
        }while(subMult[j] < b[b.length - 1]);

        multiplos.push(subMult);
            
    }
    return multiplos;
}

function getFatores(b){
    var fatores = [];

    for(var i = 0; i < b.length; b++)
    {
        var subFactor = [];
        for(var j = 2; j < b[i]/2; j++)
            if(b[i] % j == 0)
                subFactor.push[j];

        fatores.push(subFactor);
    }
    console.log(fatores);
    return fatores;
}

function getTotalX(a, b) {
    // Write your code here

    //array de multiplos:
    var multiplos = [];
    multiplos = getMultiplos(a,b);

    var fatores = [];
    fatores = getFatores(b);

    //console.log(multiplos);
    //console.log(b[b.length - 1]);

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
