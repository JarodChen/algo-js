import { swap } from '../../util.js';

//Fisher-Yates随机 
// 迭代数组，从最后一位开始并将当前位置和一个随机位置进行交换。这个随机位 置比当前位置小。这样，这个算法可以保证随机过的位置不会再被随机一次（洗扑克牌的次数越 多，随机效果越差）。 
export function fisherYatesShuffle(array) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

export function fisherYatesShuffle1(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let random = Math.random();
    const randomIndex = Math.floor(random * (i + 1));
    console.log(`random ${random} i + 1: ${i + 1} random * (i + 1): ${random * (i + 1)} randomIndex ${randomIndex}`);
    swap(array, i, randomIndex);
  }

  return array;
}