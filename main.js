// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

// for (let i = 0; i <= 100; i++) {
//     if (i%3 == 0 && i%5 == 0) {
//         console.log('Fizz Buzz')
//     } else if (i%3 == 0) {
//         console.log('Fizz') 
//     } else if (i%5 == 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }






function nextPrime(n) {
    if (n <=1) {
        return 2 
    }
    n++
    for (let i = 2; i <= Math.sqrt(n); i++) {
        console.log(n)
        console.log(i)
        if (n % i == 0) {
        // console.log(i)
            return nextPrime(n)
        }
    }
    console.log(n)
    console.log('fff')
    return n
}
// entered a bunch of console.logs to check breakpoints 
 
let n = Math.round(Math.random() * 100)
console.log(n)
nextPrime(n)


let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
// console.log(str)

let newStr = str.replaceAll(/,/g, ' ')
let arr = newStr.split('\n')
// let newStr = str.replaceAll(/,/g, ' ')
// console.table(newStr)

// iterate through the string, if the charAt that index of the string is a comma replace that with a space enter 
// let newArr = []
// let newArr = [];
for (i = 0; i <= arr.length; i++) {
    console.log(arr[i])
    // arr[i].replaceAll(/,/g,'    ');
    // part.replaceAll(/,/g,' ');
    // console.log(typeof part);
    // newArr.push(part);
}