import { findMaxValue } from '../../../search/min-max-search.js';

// 分布式排序使用已组织好的辅助数据结构（称为桶），然后进行合并，得到排好序的数组。
// 计数排序使用一个用来存储每个元素在原始 数组中出现次数的临时数组。
// 在所有元素都计数完成后，临时数组已排好序并可迭代以构建排序 后的结果数组。 
// 它是用来排序整数的优秀算法（它是一个整数排序算法），时间复杂度为 O(n+k)，
// 其中 k是 临时计数数组的大小；但是，它确实需要更多的内存来存放临时数组。 
export function countingSort(array) {
  if (array.length < 2) {
    return array;
  }
  const maxValue = findMaxValue(array);
  let sortedIndex = 0;
  const counts = new Array(maxValue + 1);
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });
  // console.log('Frequencies: ' + counts.join());
  counts.forEach((element, i) => {
    while (element > 0) {
      array[sortedIndex++] = i;
      element--;
    }
  });
  return array;
}
