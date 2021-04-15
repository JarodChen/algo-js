import Deque from './deque.js';

let deque = new Deque();
deque.addFront(1);
console.log(deque)

deque.addFront(2);
console.log(deque)

deque.addFront(3);
console.log(deque)

deque.addBack(4);
console.log(deque)

deque.removeFront();
console.log(deque)

deque.removeFront();
console.log(deque)

deque.addFront(5);
console.log(deque)

deque.addFront(6);
console.log(deque)

deque.addFront(7);
console.log(deque)

deque.addFront(8);

console.log(deque.lowestCount)
console.log(deque.count)
console.log(deque)