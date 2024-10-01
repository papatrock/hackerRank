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

/*
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function maxValue(arr)
{
    var max = 0;
    for(var i=0;i<arr.length;++i)
        if(arr[i][0] > max)
            max = arr[i][0];
    return parseInt(max);
}

function sort(arr) {
    
    var max = maxValue(arr);

    //array de contagem
    var C = new Array(max + 1).fill(0);

    //array ordenado de saída
    var B = new Array(arr.length);

    //contagem
    for (var i = 0; i < arr.length; ++i) {
        C[arr[i][0]] += 1;
    }

    for (var i = 1; i < C.length; ++i) {
        C[i] = C[i] + C[i - 1];
    }

    for (var i = arr.length - 1; i >= 0; --i) {
        var index = arr[i][0]; 
        B[C[index] - 1] = arr[i];
        C[index] -= 1; 
    }

    return B;
}


function countSort(arr) {
    // Write your code here

    //substitui metade por "-"
    for (var i = 0; i < arr.length/2; ++i){
        arr[i][1] = '-';
    }

    //ordena
    arr = sort(arr);

    //formata string final
    var stringFinal = "";
    for(var i = 0; i < arr.length; ++i)
        stringFinal += arr[i][1] + " ";

    console.log(stringFinal);
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
