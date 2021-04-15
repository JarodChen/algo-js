import { hanoi, hanoiStack } from './hanoi.js';

// for (let i = 0; i < 10; i++) {
//     const result = hanoi(i, 'a', 'b', 'c');
//     console.log(result);
// }
var result = hanoi(3, 'a', 'b', 'c');
console.log(result);

var result = hanoi(10, 'a', 'b', 'c');
console.log(result);

var result = hanoiStack(5);
console.log(result);