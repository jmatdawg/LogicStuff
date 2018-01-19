// ORANGES
// let orange =[];

// for (let i = 1; i < 101; i++) {
//     orange.push(i);
// }
// let divisibleBy3 = [];
// let divisibleBy5 = [];
// let divisibleBy3And5 = [];
// let none = [];

// orange.forEach((orange) => {
//     if (orange % 3 === 0 && orange % 5 ===0) {
//         divisibleBy3And5.push(orange);
//     } else if (orange % 3 === 0) {
//         divisibleBy3.push(orange);
//     } else if (orange % 5 === 0) {
//         divisibleBy5.push(orange);
//     } else {
//         none.push(orange);
//     }
// });

// console.log('These numbers are divisible by both 3 and 5: ' + divisibleBy3And5);
// console.log('These numbers are divisible by 3, not 5: ' + divisibleBy3);
// console.log('These numbers are divisible by 5, not 3: ' + divisibleBy5);
// console.log('These numbers are not divisible by 3 OR 5: ' + none);
// ORANGES
 
let stackOne= 100
let stackTwo= 100
let stackThree= 100
let newStack=[]

for (let i = 100; i > 0; i++) { 
    if (stackOne>=i)
    newStack.push(i);
    stackOne--;
}
console.log(stackOne);
console.log(newStack);