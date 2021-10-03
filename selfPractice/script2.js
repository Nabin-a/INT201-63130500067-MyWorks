// function helloSomeone(name) {
//     return `Hello, ${name}`;
// }

const helloSomeone = name => `Hello ${name}`;
// function  area(width, height) {
//     return width * height;
// }
const area = (w,h) => w*h;

// function evenNum(num) {
//     if (num%2 === 0) {
//         return true;
//     } else return false;   
// }

const oddNum = num => (num%2 === 1);

// console.log(evenNum(2));
console.log(oddNum(4));
console.log(area(5*4));
console.log(helloSomeone('Pong'));