import { Compare, defaultCompare } from '../../../util.js';


// 插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。接着， 
// 它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确 排序，
// 接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推。 
export const insertionSort = (array, compareFn = defaultCompare) => {
  const { length } = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    // console.log('to be inserted ' + temp);
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      // console.log('shift ' + array[j - 1]);
      array[j] = array[j - 1];
      j--;
    }
    // console.log('insert ' + temp);
    array[j] = temp;
  }
  return array;
};
