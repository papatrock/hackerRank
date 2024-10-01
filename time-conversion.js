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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const arr = s.split(":");
    var fuso = arr[2].substr(2);
    arr[2] = arr[2].substr(0,2);
    arr[0] = parseInt(arr[0]);

    if(fuso == "PM" && arr[0] != "12")
        arr[0] += 12;
    if(fuso == "AM" && arr[0] == 12)
        arr[0] -= 12;

    if(arr[0] < 10){
        arr[0] = arr[0].toString();
        arr[0] = "0"+arr[0];
    }


    var conversion = arr[0]+":"+arr[1]+":"+arr[2];
    console.log(conversion);
    return conversion;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
